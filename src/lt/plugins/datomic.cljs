(ns lt.plugins.datomic
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor.pool :as ed]
            [goog.dom :as dom]
            [lt.objs.command :as cmd]
)
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui query-button [this]
  [:div.button.query "submit query"]
:click (fn [] (object/raise this :dquery!)))

(defn GET [url cb]
  (let [body (goog.string.StringBuffer. "")
        req (.get (js/require "http") url
                  (fn [resp]
                    (.on resp "data" (fn [data]
                                       (.append body data)))
                    (.on resp "end" (fn []
                                      (cb (.toString body))))))]
    (.on req "error" (fn [err]
                       (println "Request" url "failed with:" (.-message err))))) )

(defn url-encode
  [string]
  (some-> string str (js/encodeURIComponent) (.replace "+" "%20")))

(defn by-id [id]
  (.-value (dom/getElement (name id))))

(def arg-alias-id "datomic-db-alias")
(def rest-url-id "datomic-rest-url")
(def datomic-query-id "datomic-query")
(def datomic-result-id "datomic-result")

(defn arg-alias [] (url-encode (str "[{:db/alias \"" (by-id arg-alias-id) "\"}]")))
(defn query-enc [] (url-encode (by-id datomic-query-id)))


(defn daturl [] (str (by-id rest-url-id) "api/query?q=" (query-enc) "&args=" (arg-alias)))


(object/object* ::datomic.browser
                :tags [:datomic.browser]
                :behaviors [::on-close]
                :name "Datomic"
                :init (fn [this]
                        [:div.datomic-browser
                        [:div.config-area
                           [:label {:for "rest"} "REST URL"]
                           [:input {:value "http://localhost:8001/" :name "rest" :id rest-url-id}]
                           [:label {:for "alias"} "DB Alias"]
                           [:input {:value "db/datomic-cljs-test-39989486" :name "alias" :id arg-alias-id}]
                           (query-button this)
                          ]

                        [:div.query-area
                           [:textarea {:id datomic-query-id} "[:find ?e ?name
 :where
 [?e :person/name ?name]
]"]

                         ;[:content @query-ed]
                           [:textarea {:id datomic-result-id} "result"]
                          ]
                         ]
                        )
                )

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(behavior ::submit-query
          :triggers #{:dquery!}
          :reaction (fn [this]
                      (GET (daturl) (fn [x]
                                    (dom/setTextContent
                                      (dom/getElement
                                        (name datomic-result-id)
                                      )
                                      x
                                    )
                                  )
                           )

          ))

(def browser (object/create ::datomic.browser))

(cmd/command {:command ::datomic.browse
              :desc "Datomic: open browser"
              :exec (fn []
                      (tabs/add-or-focus! browser))})
