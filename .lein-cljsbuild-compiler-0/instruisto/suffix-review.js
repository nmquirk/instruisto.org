goog.provide('instruisto.suffix_review');
goog.require('cljs.core');
goog.require('instruisto.effects');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');
goog.require('goog.fx.dom');
goog.require('goog.fx');
goog.require('goog.fx.DragDrop');
goog.require('goog.net.XhrIo');
instruisto.suffix_review.drop_drop_correct = (function drop_drop_correct(source_id,target_id){
domina.add_class_BANG_.call(null,domina.by_id.call(null,source_id),"highlight_correct");
return domina.add_class_BANG_.call(null,domina.by_id.call(null,target_id),"highlight_correct");
});
instruisto.suffix_review.drag_drop_action = (function drag_drop_action(event){
var drag_data__6581 = event.dragSourceItem.data;
var drop_data__6582 = event.dropTargetItem.data;
var and__3822__auto____6583 = (drag_data__6581 === drop_data__6582);
if(and__3822__auto____6583)
{var and__3822__auto____6584 = (drop_data__6582 === instruisto.suffix_review.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id));
if(and__3822__auto____6584)
{return (instruisto.suffix_review.drop_drop_correct.call(null,event.dragSourceItem.element.id,event.dropTargetItem.element.id) === null);
} else
{return and__3822__auto____6584;
}
} else
{return and__3822__auto____6583;
}
});
instruisto.suffix_review.init_drag_drop = (function init_drag_drop(drag_id,drop_id,data){
var drag__6586 = (new goog.fx.DragDrop(domina.by_id.call(null,drag_id),data));
drag__6586.addTarget((new goog.fx.DragDrop(domina.by_id.call(null,drop_id),data)));
goog.events.listen(drag__6586,"dragover",instruisto.suffix_review.drag_drop_action);
return drag__6586.init();
});
instruisto.suffix_review.start_suffix_review = (function start_suffix_review(){
instruisto.suffix_review.init_drag_drop.call(null,"suffix-acx-drag","suffix-acx-drop","acx");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ad-drag","suffix-ad-drop","ad");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ajx-drag","suffix-ajx-drop","ajx");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-an-drag","suffix-an-drop","an");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ar-drag","suffix-ar-drop","ar");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ebl-drag","suffix-ebl-drop","ebl");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ec-drag","suffix-ec-drop","ec");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-eg-drag","suffix-eg-drop","eg");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ej-drag","suffix-ej-drop","ej");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-em-drag","suffix-em-drop","em");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-end-drag","suffix-end-drop","end");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-er-drag","suffix-er-drop","er");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-estr-drag","suffix-estr-drop","estr");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-et-drag","suffix-et-drop","et");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-id-drag","suffix-id-drop","id");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ig-drag","suffix-ig-drop","ig");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-igx-drag","suffix-igx-drop","igx");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-il-drag","suffix-il-drop","il");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-in-drag","suffix-in-drop","in");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ind-drag","suffix-ind-drop","ind");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ing-drag","suffix-ing-drop","ing");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ism-drag","suffix-ism-drop","ism");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ist-drag","suffix-ist-drop","ist");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-obl-drag","suffix-obl-drop","obl");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-on-drag","suffix-on-drop","on");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-op-drag","suffix-op-drop","op");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-uj-drag","suffix-uj-drop","uj");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-ul-drag","suffix-ul-drop","ul");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-um-drag","suffix-um-drop","um");
instruisto.suffix_review.init_drag_drop.call(null,"suffix-cxj-drag","suffix-cxj-drop","cxj");
return instruisto.suffix_review.init_drag_drop.call(null,"suffix-nj-drag","suffix-nj-drop","nj");
});