(ns lt.plugins.datomic
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.editor.pool :as ed]
            [lt.objs.command :as cmd]
)
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui query-button [this]
  [:div.button.query "query"]
:click (fn [] (object/raise this :dquery! true)))

;(def query-ed (ed/create {:mime "plaintext" :tags [:editor.plaintext] }))

;(:ed @query-ed)

(object/object* ::datomic.browser
                :tags [:datomic.browser]
                :behaviors [::on-close]
                :name "Datomic"
                :init (fn [this]
                        [:div.datomic-browser
                        [:div.flex-row
                           [:input {:value "REST URL"}]
                           ;[:content @query-ed]
                           (query-button this)
                          ]
                        [:div.flex-row
                           [:textarea "result"]
                          ]
                         ]
                        )
                )

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
  (tab/rem! this)))

(def browser (object/create ::datomic.browser))

(cmd/command {:command ::datomic.browse
              :desc "Datomic: open browser"
              :exec (fn []
                      (tabs/add-or-focus! browser))})
