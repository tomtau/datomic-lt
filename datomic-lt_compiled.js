if(!lt.util.load.provided_QMARK_('lt.plugins.datomic')) {
goog.provide('lt.plugins.datomic');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.tabs');
goog.require('lt.objs.tabs');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.datomic.query_button = (function query_button(this$){var e__6275__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.query","div.button.query",628935867),"query"], null));var seq__6412_6418 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__6275__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"dquery!","dquery!",2916227375),true);
});})(e__6275__auto__))
], null)));var chunk__6413_6419 = null;var count__6414_6420 = 0;var i__6415_6421 = 0;while(true){
if((i__6415_6421 < count__6414_6420))
{var vec__6416_6422 = cljs.core._nth.call(null,chunk__6413_6419,i__6415_6421);var ev__6276__auto___6423 = cljs.core.nth.call(null,vec__6416_6422,0,null);var func__6277__auto___6424 = cljs.core.nth.call(null,vec__6416_6422,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6423,func__6277__auto___6424);
{
var G__6425 = seq__6412_6418;
var G__6426 = chunk__6413_6419;
var G__6427 = count__6414_6420;
var G__6428 = (i__6415_6421 + 1);
seq__6412_6418 = G__6425;
chunk__6413_6419 = G__6426;
count__6414_6420 = G__6427;
i__6415_6421 = G__6428;
continue;
}
} else
{var temp__4092__auto___6429 = cljs.core.seq.call(null,seq__6412_6418);if(temp__4092__auto___6429)
{var seq__6412_6430__$1 = temp__4092__auto___6429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6412_6430__$1))
{var c__5632__auto___6431 = cljs.core.chunk_first.call(null,seq__6412_6430__$1);{
var G__6432 = cljs.core.chunk_rest.call(null,seq__6412_6430__$1);
var G__6433 = c__5632__auto___6431;
var G__6434 = cljs.core.count.call(null,c__5632__auto___6431);
var G__6435 = 0;
seq__6412_6418 = G__6432;
chunk__6413_6419 = G__6433;
count__6414_6420 = G__6434;
i__6415_6421 = G__6435;
continue;
}
} else
{var vec__6417_6436 = cljs.core.first.call(null,seq__6412_6430__$1);var ev__6276__auto___6437 = cljs.core.nth.call(null,vec__6417_6436,0,null);var func__6277__auto___6438 = cljs.core.nth.call(null,vec__6417_6436,1,null);lt.util.dom.on.call(null,e__6275__auto__,ev__6276__auto___6437,func__6277__auto___6438);
{
var G__6439 = cljs.core.next.call(null,seq__6412_6430__$1);
var G__6440 = null;
var G__6441 = 0;
var G__6442 = 0;
seq__6412_6418 = G__6439;
chunk__6413_6419 = G__6440;
count__6414_6420 = G__6441;
i__6415_6421 = G__6442;
continue;
}
}
} else
{}
}
break;
}
return e__6275__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.datomic","datomic.browser","lt.plugins.datomic/datomic.browser",4357792476),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datomic.browser","datomic.browser",4127140667)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.datomic","on-close","lt.plugins.datomic/on-close",1689189403)], null),new cljs.core.Keyword(null,"name","name",1017277949),"Datomic",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datomic-browser","div.datomic-browser",990125823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row","div.flex-row",4121591349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"REST URL"], null)], null),lt.plugins.datomic.query_button.call(null,this$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row","div.flex-row",4121591349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),"result"], null)], null)], null);
}));
lt.plugins.datomic.__BEH__on_close = (function __BEH__on_close(this$){return tab.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.datomic","on-close","lt.plugins.datomic/on-close",1689189403),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.datomic.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.datomic.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.datomic","datomic.browser","lt.plugins.datomic/datomic.browser",4357792476));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.datomic","datomic.browse","lt.plugins.datomic/datomic.browse",2703186140),new cljs.core.Keyword(null,"desc","desc",1016984067),"Datomic: open browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.datomic.browser);
})], null));
}

//# sourceMappingURL=datomic-lt_compiled.js.map