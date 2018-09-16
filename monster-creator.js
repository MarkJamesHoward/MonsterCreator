"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var lit_element_1 = require("@polymer/lit-element");
var gesture_event_listeners_1 = require("@polymer/polymer/lib/mixins/gesture-event-listeners");
var Gestures = require("@polymer/polymer/lib/utils/gestures");
// import "@polymer/iron-icons/iron-icons.js";
// import "@polymer/paper-icon-button";
//@ts-ignore
var MonsterCreator = /** @class */ (function (_super) {
    __extends(MonsterCreator, _super);
    function MonsterCreator() {
        var _this = _super.call(this) || this;
        _this.NUMBER_OF_IMAGES_EYES = 3;
        _this.NUMBER_OF_IMAGES_MOUTH = 3;
        _this.NUMBER_OF_IMAGES_SILHOUETTES = 4;
        _this.level = 1;
        _this.customize = "Yes";
        _this.EyesSlot1Used = false;
        _this.EyesSlot2Used = false;
        _this.EyesSlot3Used = false;
        _this.EyesSlot4Used = false;
        _this.MouthSlot2Used = false;
        _this.MouthSlot3Used = false;
        _this.MouthSlot4Used = false;
        _this.MouthSlot1Used = false;
        _this.level = 5;
        _this.selectedsilhouetteindex = 2;
        return _this;
    }
    MonsterCreator.prototype.firstUpdated = function () {
        console.log("first updated called");
        this.ready();
    };
    MonsterCreator.prototype.ready = function () {
        console.log("ready called");
        var node;
        switch (this.selectedmouthindex) {
            case 1:
                this.MouthSlot1Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#MouthSlot1");
                node.style.left = this.selectedmouthx + "%";
                node.style.top = this.selectedmouthy + "%";
                break;
            case 2:
                this.MouthSlot2Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#MouthSlot2");
                node.style.left = this.selectedmouthx + "%";
                node.style.top = this.selectedmouthy + "%";
                break;
            case 3:
                this.MouthSlot3Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#MouthSlot3");
                node.style.left = this.selectedmouthx + "%";
                node.style.top = this.selectedmouthy + "%";
                break;
            case 4:
                this.MouthSlot4Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#MouthSlot4");
                node.style.left = this.selectedmouthx + "%";
                node.style.top = this.selectedmouthy + "%";
                break;
        }
        switch (this.selectedeyeindex) {
            case 1:
                this.EyesSlot1Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#EyesSlot1");
                node.style.left = this.selectedeyex + "%";
                node.style.top = this.selectedeyey + "%";
                break;
            case 2:
                this.EyesSlot2Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#EyesSlot2");
                node.style.left = this.selectedeyex + "%";
                node.style.top = this.selectedeyey + "%";
                break;
            case 3:
                this.EyesSlot3Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#EyesSlot3");
                node.style.left = this.selectedeyex + "%";
                node.style.top = this.selectedeyey + "%";
                break;
            case 4:
                this.EyesSlot4Used = true;
                //@ts-ignore
                node = this.shadowRoot.querySelector("#EyesSlot4");
                node.style.left = this.selectedeyex + "%";
                node.style.top = this.selectedeyey + "%";
                break;
        }
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot1"), "track", this.handleTrackEye1.bind(this));
        //@ts-ignore
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot2"), "track", this.handleTrackEye2.bind(this));
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot3"), "track", this.handleTrackEye3.bind(this));
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot4"), "track", this.handleTrackEye4.bind(this));
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot1"), "track", this.handleTrackMouth1.bind(this));
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot2"), "track", this.handleTrackMouth2.bind(this));
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot3"), "track", this.handleTrackMouth3.bind(this));
        Gestures.addListener(
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot4"), "track", this.handleTrackMouth4.bind(this));
    };
    MonsterCreator.prototype.handleTrackEye1 = function (e) {
        console.log("call");
        this.handleTrackEye(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot1"), 1);
        this.EyesSlot1Used = true;
    };
    MonsterCreator.prototype.handleTrackEye2 = function (e) {
        this.handleTrackEye(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot2"), 2);
        this.EyesSlot2Used = true;
    };
    MonsterCreator.prototype.handleTrackEye3 = function (e) {
        this.handleTrackEye(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot3"), 3);
        this.EyesSlot3Used = true;
    };
    MonsterCreator.prototype.handleTrackEye4 = function (e) {
        this.handleTrackEye(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#EyesSlot4"), 4);
        this.EyesSlot4Used = true;
    };
    MonsterCreator.prototype.handleTrackMouth1 = function (e) {
        this.handleTrackMouth(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot1"), 1);
        this.MouthSlot1Used = true;
    };
    MonsterCreator.prototype.handleTrackMouth2 = function (e) {
        this.handleTrackMouth(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot2"), 2);
        this.MouthSlot2Used = true;
    };
    MonsterCreator.prototype.handleTrackMouth3 = function (e) {
        this.handleTrackMouth(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot3"), 3);
        this.MouthSlot3Used = true;
    };
    MonsterCreator.prototype.handleTrackMouth4 = function (e) {
        this.handleTrackMouth(e, 
        //@ts-ignore
        this.shadowRoot.querySelector("#MouthSlot4"), 4);
        this.MouthSlot4Used = true;
    };
    MonsterCreator.prototype.handleTrackEye = function (e, item, index) {
        //@ts-ignore
        var container = this.shadowRoot.querySelector("#eyesandsilcontainer");
        switch (index) {
            case 1:
                this.EyesSlot2Used = false;
                this.EyesSlot3Used = false;
                this.EyesSlot4Used = false;
                break;
            case 2:
                this.EyesSlot1Used = false;
                this.EyesSlot3Used = false;
                this.EyesSlot4Used = false;
                break;
            case 3:
                this.EyesSlot1Used = false;
                this.EyesSlot2Used = false;
                this.EyesSlot4Used = false;
                break;
            case 4:
                this.EyesSlot1Used = false;
                this.EyesSlot2Used = false;
                this.EyesSlot3Used = false;
                break;
        }
        //Reset the position of the other eyes
        switch (e.detail.state) {
            case "start":
                console.log("Tracking started!");
                break;
            case "track":
                //item.style.left = e.detail.sourceEvent.clientX + "px";
                item.style.left =
                    (e.detail.sourceEvent.clientX / container.clientWidth) * 100 + "%";
                item.style.top =
                    (e.detail.sourceEvent.clientY / container.clientHeight) * 100 + "%";
                //item.style.top = e.detail.sourceEvent.clientY + "px";
                //this.message = "Tracking in progress... " + x + ", " + y;
                //console.log("tracing in progress");
                break;
            case "end":
                console.log("trackng ended - store position");
                this.selectedeyeindex = index;
                this.selectedeyex = item.style.left.substring(0, 2);
                this.selectedeyey = item.style.top.substring(0, 2);
                console.log("selected eye index " + this.selectedeyeindex);
                console.log("selected eye X " + this.selectedeyex);
                break;
        }
    };
    MonsterCreator.prototype.handleTrackMouth = function (e, item, index) {
        //@ts-ignore
        var container = this.shadowRoot.querySelector("#eyesandsilcontainer");
        // console.log(container.clientWidth);
        // console.log(e.detail.sourceEvent.clientX);
        // console.log("handling track " + e.detail.state);
        // console.dir(e);
        switch (index) {
            case 1:
                this.MouthSlot2Used = false;
                this.MouthSlot3Used = false;
                this.MouthSlot4Used = false;
                break;
            case 2:
                this.MouthSlot1Used = false;
                this.MouthSlot3Used = false;
                this.MouthSlot4Used = false;
                break;
            case 3:
                this.MouthSlot1Used = false;
                this.MouthSlot2Used = false;
                this.MouthSlot4Used = false;
                break;
            case 4:
                this.MouthSlot1Used = false;
                this.MouthSlot2Used = false;
                this.MouthSlot3Used = false;
                break;
        }
        //Reset the position of the other eyes
        switch (e.detail.state) {
            case "start":
                break;
            case "track":
                item.style.left =
                    (e.detail.sourceEvent.clientX / container.clientWidth) * 100 + "%";
                item.style.top =
                    (e.detail.sourceEvent.clientY / container.clientHeight) * 100 + "%";
                break;
            case "end":
                console.log("tracking ended - store position and selected index");
                this.selectedmouthindex = index;
                this.selectedmouthx = item.style.left.substring(0, 2);
                this.selectedmouthy = item.style.top.substring(0, 2);
                console.log("selected mouth index " + this.selectedmouthindex);
                console.log("selected mouth X " + this.selectedmouthx);
                break;
        }
    };
    MonsterCreator.prototype.LevelUp = function () {
        this.level++;
        this.ready();
    };
    MonsterCreator.prototype.render = function () {
        var _this = this;
        return lit_element_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <style>\n      :root {\n        box-sizing: border-box;\n      }\n    \n      .OverlayTwoItemsCharacter {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 1fr;\n        grid-template-areas: \"main\";\n      }\n    \n      .NoPadlock {\n        display: none;\n      }\n    \n      .hidden {\n        display: none;\n      }\n\n      .DisableCustomize {\n        visibility: hidden;\n      }\n    \n      .displayVertical {\n        display: flex;\n        flex-direction: column;\n      }\n    \n      .CharacterCustomizeMain {\n        padding: 0;\n        margin: 0;\n        height: 100%;\n        width: 100%;\n        margin: 0 auto;\n      }\n              \n      .eyes,\n      .mouth {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n      }\n    \n      .silhouette {\n        display: flex;\n      }\n    \n      .silhouettePicker {\n        object-fit: contain;\n        width: 20%;\n      }\n    \n      button {\n        cursor: pointer;\n        border-radius: 0.1rem;\n      }\n    \n      .overlay {\n        display: grid;\n      }\n        .MissingImage {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 2px solid black;\n        border-radius: 10%;\n        height: 100%;\n      }\n\n      ::slotted(img) {\n        width:50%;\n        max-width: 150px;\n        object-fit: contain;\n      } \n\n      ::slotted(img.SilhouetteSlot) {\n        width:50%;\n        max-width: 300px;\n        display: block; \n        margin: 0 auto!important;\n      }\n\n\n    .MouthSlot1, .MouthSlot2 , .MouthSlot3, .MouthSlot4 {\n      position:absolute;\n      width: 20%;\n      max-width: 150px;\n    }\n\n    .EyesSlot1, .EyesSlot2, .EyesSlot3, .EyesSlot4{\n      position:absolute;\n      width: 20%;\n      max-width: 150px;\n    }\n\n    </style>\n\n\n\n    <div class=\"CharacterCustomizeMain\">\n\n      <div id=\"eyesandsilcontainer\" style=\"position:relative\">  \n\n        <div class=\"eyes\">\n          <div class=\"", "\">\n            <div id=\"EyesSlot1\" class=\"", "\">\n              <slot name=\"EyesSlot1\" ></slot>\n            </div>\n          </div>\n\n          <div class=\"", "\">\n            <div id=\"EyesSlot2\" class=\"", "\">\n              <slot name=\"EyesSlot2\" ></slot>\n            </div>\n          </div>\n\n          <div class=\"", "\">\n            <div id=\"EyesSlot3\" class=\"", "\">\n              <slot name=\"EyesSlot3\" ></slot>\n            </div>\n          </div>\n\n          <div class=\"", "\">\n            <div class=\"", "\">\n              <div id=\"EyesSlot4\" class=\"", "\">\n                <slot name=\"EyesSlot4\" ></slot>        \n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class='mouth'>\n\n          <div class=\"", "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot1\" class=\"", "\">\n                  <slot name=\"MouthSlot1\" ></slot>        \n                </div>\n              </div>\n          </div>\n\n          <div class=\"", "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot2\" class=\"", "\">\n                  <slot name=\"MouthSlot2\" ></slot>        \n                </div>\n              </div>\n          </div>\n\n          <div class=\"", "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot3\" class=\"", "\">\n                  <slot name=\"MouthSlot3\" ></slot>        \n                </div>\n              </div>\n          </div>\n              \n          <div class=\"", "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot4\" class=\"", "\">\n                  <slot name=\"MouthSlot4\" ></slot>        \n                </div>\n              </div>\n          </div>\n      \n        </div>\n    \n      <div class=\"OverlayTwoItemsCharacter\">\n        <div style=\"grid-area:main; margin: 0 auto\" class=\"", "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette1\"></slot>\n        </div>\n        <div style=\"grid-area:main;  margin: 0 auto\" class=\"", "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette2\"></slot>\n        </div>\n        <div style=\"grid-area:main;  margin: 0 auto\" class=\"", "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette3\"></slot>\n        </div>\n        <div  style=\"grid-area:main;  margin: 0 auto\" class=\"", "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette4\"></slot>\n        </div>\n        <div style=\"grid-area:main;  margin: 0 auto\" class=\"", "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette5\"></slot>\n        </div>\n      </div>\n\n      </div>\n\n      <div id='SilhouetteSelector' class=\"", "\">\n      \n        <div @click=\"", "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot name=\"silhouette1\"><div class=\"MissingImage\">Please supply Silhouette1.png</div></slot>\n          <iron-icon class=\"", "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n          </div>\n          \n          <div @click=\"", "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <iron-icon class=\"", "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\" icon=\"lock\"></iron-icon>\n          <slot name=\"silhouette2\"><div class=\"MissingImage\">Please supply Silhouette2.png</div></slot>\n        </div>\n        \n        <div @click=\"", "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot name=\"silhouette3\"><div class=\"MissingImage\">Please supply Silhouette3.png</div></slot>\n          <iron-icon class=\"", "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n        </div>\n\n        <div @click=\"", "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot   name=\"silhouette4\"><div class=\"MissingImage\">Please supply Silhouette4.png</div></slot>\n          <iron-icon class=\"", "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n        </div>\n\n        <div @click=\"", "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot name=\"silhouette5\"><div class=\"MissingImage\">Please supply Silhouette5.png</div></slot>\n          <iron-icon class=\"", "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n        </div>\n      </div>\n\n    </div>\n        "], ["\n    <style>\n      :root {\n        box-sizing: border-box;\n      }\n    \n      .OverlayTwoItemsCharacter {\n        display: grid;\n        grid-template-rows: 1fr;\n        grid-template-columns: 1fr;\n        grid-template-areas: \"main\";\n      }\n    \n      .NoPadlock {\n        display: none;\n      }\n    \n      .hidden {\n        display: none;\n      }\n\n      .DisableCustomize {\n        visibility: hidden;\n      }\n    \n      .displayVertical {\n        display: flex;\n        flex-direction: column;\n      }\n    \n      .CharacterCustomizeMain {\n        padding: 0;\n        margin: 0;\n        height: 100%;\n        width: 100%;\n        margin: 0 auto;\n      }\n              \n      .eyes,\n      .mouth {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n      }\n    \n      .silhouette {\n        display: flex;\n      }\n    \n      .silhouettePicker {\n        object-fit: contain;\n        width: 20%;\n      }\n    \n      button {\n        cursor: pointer;\n        border-radius: 0.1rem;\n      }\n    \n      .overlay {\n        display: grid;\n      }\n        .MissingImage {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: 2px solid black;\n        border-radius: 10%;\n        height: 100%;\n      }\n\n      ::slotted(img) {\n        width:50%;\n        max-width: 150px;\n        object-fit: contain;\n      } \n\n      ::slotted(img.SilhouetteSlot) {\n        width:50%;\n        max-width: 300px;\n        display: block; \n        margin: 0 auto!important;\n      }\n\n\n    .MouthSlot1, .MouthSlot2 , .MouthSlot3, .MouthSlot4 {\n      position:absolute;\n      width: 20%;\n      max-width: 150px;\n    }\n\n    .EyesSlot1, .EyesSlot2, .EyesSlot3, .EyesSlot4{\n      position:absolute;\n      width: 20%;\n      max-width: 150px;\n    }\n\n    </style>\n\n\n\n    <div class=\"CharacterCustomizeMain\">\n\n      <div id=\"eyesandsilcontainer\" style=\"position:relative\">  \n\n        <div class=\"eyes\">\n          <div class=\"",
            "\">\n            <div id=\"EyesSlot1\" class=\"",
            "\">\n              <slot name=\"EyesSlot1\" ></slot>\n            </div>\n          </div>\n\n          <div class=\"",
            "\">\n            <div id=\"EyesSlot2\" class=\"",
            "\">\n              <slot name=\"EyesSlot2\" ></slot>\n            </div>\n          </div>\n\n          <div class=\"",
            "\">\n            <div id=\"EyesSlot3\" class=\"",
            "\">\n              <slot name=\"EyesSlot3\" ></slot>\n            </div>\n          </div>\n\n          <div class=\"",
            "\">\n            <div class=\"", "\">\n              <div id=\"EyesSlot4\" class=\"",
            "\">\n                <slot name=\"EyesSlot4\" ></slot>        \n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class='mouth'>\n\n          <div class=\"",
            "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot1\" class=\"",
            "\">\n                  <slot name=\"MouthSlot1\" ></slot>        \n                </div>\n              </div>\n          </div>\n\n          <div class=\"",
            "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot2\" class=\"",
            "\">\n                  <slot name=\"MouthSlot2\" ></slot>        \n                </div>\n              </div>\n          </div>\n\n          <div class=\"",
            "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot3\" class=\"",
            "\">\n                  <slot name=\"MouthSlot3\" ></slot>        \n                </div>\n              </div>\n          </div>\n              \n          <div class=\"",
            "\">\n              <div class=\"", "\">\n                <div id=\"MouthSlot4\" class=\"",
            "\">\n                  <slot name=\"MouthSlot4\" ></slot>        \n                </div>\n              </div>\n          </div>\n      \n        </div>\n    \n      <div class=\"OverlayTwoItemsCharacter\">\n        <div style=\"grid-area:main; margin: 0 auto\" class=\"",
            "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette1\"></slot>\n        </div>\n        <div style=\"grid-area:main;  margin: 0 auto\" class=\"",
            "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette2\"></slot>\n        </div>\n        <div style=\"grid-area:main;  margin: 0 auto\" class=\"",
            "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette3\"></slot>\n        </div>\n        <div  style=\"grid-area:main;  margin: 0 auto\" class=\"",
            "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette4\"></slot>\n        </div>\n        <div style=\"grid-area:main;  margin: 0 auto\" class=\"",
            "\">\n          <slot style=\"margin: 0 auto\"  name=\"pickedsilhouette5\"></slot>\n        </div>\n      </div>\n\n      </div>\n\n      <div id='SilhouetteSelector' class=\"",
            "\">\n      \n        <div @click=\"",
            "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot name=\"silhouette1\"><div class=\"MissingImage\">Please supply Silhouette1.png</div></slot>\n          <iron-icon class=\"",
            "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n          </div>\n          \n          <div @click=\"",
            "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <iron-icon class=\"",
            "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\" icon=\"lock\"></iron-icon>\n          <slot name=\"silhouette2\"><div class=\"MissingImage\">Please supply Silhouette2.png</div></slot>\n        </div>\n        \n        <div @click=\"",
            "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot name=\"silhouette3\"><div class=\"MissingImage\">Please supply Silhouette3.png</div></slot>\n          <iron-icon class=\"",
            "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n        </div>\n\n        <div @click=\"",
            "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot   name=\"silhouette4\"><div class=\"MissingImage\">Please supply Silhouette4.png</div></slot>\n          <iron-icon class=\"",
            "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n        </div>\n\n        <div @click=\"",
            "\" class=\"OverlayTwoItemsCharacter silhouettePicker\">\n          <slot name=\"silhouette5\"><div class=\"MissingImage\">Please supply Silhouette5.png</div></slot>\n          <iron-icon class=\"",
            "\" style=\"grid-area:main;z-index:2;align-self:center;justify-self:center\"\n            icon=\"lock\"></iron-icon>\n        </div>\n      </div>\n\n    </div>\n        "])), this.customize != "Yes" && this.EyesSlot1Used == false
            ? "DisableCustomize"
            : "", this.EyesSlot1Used ? "EyesSlot1" : "Eye1ResetPostion", this.customize != "Yes" && this.EyesSlot2Used == false
            ? "DisableCustomize"
            : "", this.EyesSlot2Used ? "EyesSlot2" : "Eye2ResetPostion", this.customize != "Yes" && this.EyesSlot3Used == false
            ? "DisableCustomize"
            : "", this.EyesSlot3Used ? "EyesSlot3" : "Eye3ResetPostion", this.customize != "Yes" && this.EyesSlot4Used == false
            ? "DisableCustomize"
            : "", this.level > 3 ? "" : "hidden", this.EyesSlot4Used ? "EyesSlot4" : "Eye4ResetPostion", this.customize != "Yes" && this.MouthSlot1Used == false
            ? "DisableCustomize"
            : "", this.level > 0 ? "" : "hidden", this.MouthSlot1Used ? "MouthSlot1" : "Mouth1ResetPostion", this.customize != "Yes" && this.MouthSlot2Used == false
            ? "DisableCustomize"
            : "", this.level > 1 ? "" : "hidden", this.MouthSlot2Used ? "MouthSlot2" : "Mouth2ResetPostion", this.customize != "Yes" && this.MouthSlot3Used == false
            ? "DisableCustomize"
            : "", this.level > 2 ? "" : "hidden", this.MouthSlot3Used ? "MouthSlot3" : "Mouth3ResetPostion", this.customize != "Yes" && this.MouthSlot4Used == false
            ? "DisableCustomize"
            : "", this.level > 3 ? "" : "hidden", this.MouthSlot4Used ? "MouthSlot4" : "Mouth4ResetPostion", this.selectedsilhouetteindex == 1 ? "" : "hidden", this.selectedsilhouetteindex == 2 ? "" : "hidden", this.selectedsilhouetteindex == 3 ? "" : "hidden", this.selectedsilhouetteindex == 4 ? "" : "hidden", this.selectedsilhouetteindex == 5 ? "" : "hidden", this.customize == "Yes" ? "silhouette" : "DisableCustomize", function () {
            return _this.Pick(1);
        }, this.level >= 1 ? "NoPadlock" : "", function () {
            return _this.Pick(2);
        }, this.level >= 2 ? "NoPadlock" : "", function () {
            return _this.Pick(3);
        }, this.level >= 3 ? "NoPadlock" : "", function () {
            return _this.Pick(4);
        }, this.level >= 4 ? "NoPadlock" : "", function () {
            return _this.Pick(5);
        }, this.level >= 5 ? "NoPadlock" : "");
    };
    MonsterCreator.prototype.Pick = function (e) {
        console.log(e);
        if (e <= this.level) {
            this.selectedsilhouetteindex = e;
        }
    };
    Object.defineProperty(MonsterCreator, "is", {
        get: function () {
            return "monster-creator";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedeyex");
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedeyey");
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedmouthindex");
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedmouthx");
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedmouthy");
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedsilhouetteindex");
    __decorate([
        lit_element_1.property({ type: Number })
    ], MonsterCreator.prototype, "NUMBER_OF_IMAGES_EYES");
    __decorate([
        lit_element_1.property({ type: Number })
    ], MonsterCreator.prototype, "NUMBER_OF_IMAGES_MOUTH");
    __decorate([
        lit_element_1.property({ type: Number })
    ], MonsterCreator.prototype, "NUMBER_OF_IMAGES_SILHOUETTES");
    __decorate([
        lit_element_1.property({ type: Number, attribute: true })
    ], MonsterCreator.prototype, "level");
    __decorate([
        lit_element_1.property({ type: String })
    ], MonsterCreator.prototype, "customize");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "EyesSlot1Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "EyesSlot2Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "EyesSlot3Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "EyesSlot4Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "MouthSlot2Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "MouthSlot3Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "MouthSlot4Used");
    __decorate([
        lit_element_1.property({ type: Boolean, attribute: false })
    ], MonsterCreator.prototype, "MouthSlot1Used");
    __decorate([
        lit_element_1.property({ type: Number, reflect: true, attribute: true })
    ], MonsterCreator.prototype, "selectedeyeindex");
    return MonsterCreator;
}(gesture_event_listeners_1.GestureEventListeners(lit_element_1.LitElement)));
customElements.define(MonsterCreator.is, MonsterCreator);
var templateObject_1;
