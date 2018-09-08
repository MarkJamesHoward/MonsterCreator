import { LitElement, html } from "@polymer/lit-element";
import { GestureEventListeners } from "@polymer/polymer/lib/mixins/gesture-event-listeners.js";
import * as Gestures from "@polymer/polymer/lib/utils/gestures.js";

import "@polymer/iron-icons/iron-icons.js";
import "@polymer/paper-icon-button";

export class MonsterCreator extends GestureEventListeners(LitElement) {
  constructor() {
    console.log("created");
    super();
    this.allowMouthMoveLeft = true;
    this.allowMouthMoveRight = true;
    this.allowMoveEyesLeft = true;
    this.allowMoveEyesRight = true;
    this.eyes = 1;
    this.mouth = 1;
    this.silhouette = 1;
    this.NUMBER_OF_IMAGES_EYES = 4;
    this.NUMBER_OF_IMAGES_MOUTH = 5;
    this.NUMBER_OF_IMAGES_SILHOUETTES = 5;
    this.locks = [];
    this.level = 1;
    this.message = "TESTSTRSDFS";
  }

  ready() {
    super.ready();

    Gestures.addListener(
      this._root.querySelector("#EyesSlot1"),
      "track",
      this.handleTrackEye1.bind(this)
    );
    Gestures.addListener(
      this._root.querySelector("#EyesSlot2"),
      "track",
      this.handleTrackEye2.bind(this)
    );
    Gestures.addListener(
      this._root.querySelector("#EyesSlot3"),
      "track",
      this.handleTrackEye3.bind(this)
    );
    Gestures.addListener(
      this._root.querySelector("#EyesSlot4"),
      "track",
      this.handleTrackEye4.bind(this)
    );

    Gestures.addListener(
      this._root.querySelector("#MouthSlot1"),
      "track",
      this.handleTrackMouth1.bind(this)
    );
    Gestures.addListener(
      this._root.querySelector("#MouthSlot2"),
      "track",
      this.handleTrackMouth2.bind(this)
    );
    Gestures.addListener(
      this._root.querySelector("#MouthSlot3"),
      "track",
      this.handleTrackMouth3.bind(this)
    );
    Gestures.addListener(
      this._root.querySelector("#MouthSlot4"),
      "track",
      this.handleTrackMouth4.bind(this)
    );
  }

  handleTrackEye1(e) {
    this.handleTrackEye(e, this._root.querySelector("#EyesSlot1"), 1);
    this.EyesSlot1Used = true;
  }
  handleTrackEye2(e) {
    this.handleTrackEye(e, this._root.querySelector("#EyesSlot2"), 2);
    this.EyesSlot2Used = true;
  }
  handleTrackEye3(e) {
    this.handleTrackEye(e, this._root.querySelector("#EyesSlot3"), 3);
    this.EyesSlot3Used = true;
  }
  handleTrackEye4(e) {
    this.handleTrackEye(e, this._root.querySelector("#EyesSlot4"), 4);
    this.EyesSlot4Used = true;
  }

  handleTrackMouth1(e) {
    this.handleTrackMouth(e, this._root.querySelector("#MouthSlot1"), 1);
    this.MouthSlot1Used = true;
  }
  handleTrackMouth2(e) {
    this.handleTrackMouth(e, this._root.querySelector("#MouthSlot2"), 2);
    this.MouthSlot2Used = true;
  }
  handleTrackMouth3(e) {
    this.handleTrackMouth(e, this._root.querySelector("#MouthSlot3"), 3);
    this.MouthSlot3Used = true;
  }
  handleTrackMouth4(e) {
    this.handleTrackMouth(e, this._root.querySelector("#MouthSlot4"), 4);
    this.MouthSlot4Used = true;
  }

  handleTrackEye(e, item, index) {
    let container = this._root.querySelector("#eyesandsilcontainer");
    // console.log(container.clientWidth);
    // console.log(e.detail.sourceEvent.clientX);
    // console.log("handling track " + e.detail.state);
    // console.dir(e);
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
        this.message = "Tracking started!";
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
        this.message = "Tracking ended!";
        console.log("trackng ended - store position");
        item.trackX = item.style.left;
        item.trackY = item.style.top;
        console.log(item.trackX);
        console.log(item.trackY);
        break;
    }
  }

  handleTrackMouth(e, item, index) {
    let container = this._root.querySelector("#eyesandsilcontainer");
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
        this.EMouthSlot4Used = false;
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
        this.message = "Tracking started!";
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
        this.message = "Tracking ended!";
        console.log("trackng ended - store position");
        item.trackX = item.style.left;
        item.trackY = item.style.top;
        console.log(item.trackX);
        console.log(item.trackY);
        break;
    }
  }

  static get properties() {
    return {
      silhouette: Number,
      level: { Type: Number, value: 1 },
      mouth: Number,
      eyes: Number,
      NUMBER_OF_IMAGES_EYES: Number,
      NUMBER_OF_IMAGES_MOUTH: Number,
      NUMBER_OF_IMAGES_SILHOUETTES: Number,
      customize: Boolean,
      locks: Array,
      message: String,
      EyesSlot1Used: Boolean,
      EyesSlot2Used: Boolean,
      EyesSlot3Used: Boolean,
      EyesSlot4Used: Boolean,
      MouthSlot2Used: Boolean,
      MouthSlot3Used: Boolean,
      MouthSlot4Used: Boolean,
      MouthSlot1Used: Boolean
    };
  }

  LevelUp() {
    this.level++;
  }

  _render({
    silhouette,
    level,
    mouth,
    eyes,
    NUMBER_OF_IMAGES_EYES,
    NUMBER_OF_IMAGES_MOUTH,
    NUMBER_OF_IMAGES_SILHOUETTES,
    customize,
    locks,
    message
  }) {
    return html`
    <style>
      :root {
        box-sizing: border-box;
      }
    
      .OverlayTwoItemsCharacter {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        grid-template-areas: "main";
      }
    
      .NoPadlock {
        display: none;
      }
    
      .hidden {
        display: none;
      }

      .DisableCustomize {
        visibility: hidden;
      }
    
      .displayVertical {
        display: flex;
        flex-direction: column;
      }
    
      .CharacterCustomizeMain {
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-areas: "Top"
                              "Bottom";
        grid-template-rows: 6fr 1fr;
        grid-template-columns: 1fr;
      }

          
      .SilhouetteBackgroundContainer {
        align-self: top;
        grid-area: Top;
        width: 100%;
        height: 30%;
      }

     #SilhouetteSelector {
       grid-area: Bottom;
     }
    
      .eyes,
      .mouth {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        width: 100%;
      }
    
      .silhouette {
        grid-area: silhouette;
        justify-content: center;
        align-items: flex-end;
        display: flex;
        align-self: end;
      }
    
      .silhouettePicker {
        object-fit: contain;
        width: 20%;
      }
    
      button {
        cursor: pointer;
        border-radius: 0.1rem;
      }
    
      .overlay {
        display: grid;
      }
        .MissingImage {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid black;
        border-radius: 10%;
        height: 100%;
      }

      ::slotted(img) {
        grid-area:main;
        width:100%
      } 

      ::slotted(img.SilhouetteSlot) {
        width:80%;
        display: block; 
        margin: 0 auto;
      }


    .MouthSlot1, .MouthSlot2 , .MouthSlot3, .MouthSlot4 {
      position:absolute;
      width: 20%;
    }

    .EyesSlot1, .EyesSlot2, .EyesSlot3, .EyesSlot4{
      position:absolute;
      width: 20%;
    }
    
    #eyesandsilcontainer {
      width: 100%;
    }

    </style>

    <button onclick="${() => {
      this.LevelUp();
    }}" id="level">Level++</button>

    <div>Level: ${this.level}</div>

    <div class="CharacterCustomizeMain">

      <div class='SilhouetteBackgroundContainer'>

        <div id="eyesandsilcontainer" style="position:relative">  

          <div class="eyes">
            <div id="EyesSlot1" class$="${
              this.EyesSlot1Used ? "EyesSlot1" : "Eye1ResetPostion"
            }">
              <slot name="EyesSlot1" >I need eyes please!</slot>
            </div>

            <div id="EyesSlot2" class$="${
              this.EyesSlot2Used ? "EyesSlot2" : "Eye2ResetPostion"
            }">
              <slot name="EyesSlot2" >I need eyes please!</slot>
            </div>

            <div id="EyesSlot3" class$="${
              this.EyesSlot3Used ? "EyesSlot3" : "Eye3ResetPostion"
            }">
              <slot name="EyesSlot3" >I need eyes please!</slot>
            </div>

            <div class$="${this.level > 3 ? "" : "hidden"}">
              <div id="EyesSlot4" class$="${
                this.EyesSlot4Used ? "EyesSlot4" : "Eye4ResetPostion"
              }">
                <slot name="EyesSlot4" >I need eyes please!</slot>        
              </div>
            </div>
          </div>

          <div class='mouth'>
              <div class$="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot1" class$="${
                  this.MouthSlot1Used ? "MouthSlot1" : "Mouth1ResetPostion"
                }">
                  <slot name="MouthSlot1" >I need eyes please!</slot>        
                </div>
              </div>

              <div class$="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot2" class$="${
                  this.MouthSlot2Used ? "MouthSlot2" : "Mouth2ResetPostion"
                }">
                  <slot name="MouthSlot2" >I need eyes please!</slot>        
                </div>
              </div>

              <div class$="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot3" class$="${
                  this.MouthSlot3Used ? "MouthSlot3" : "Mouth3ResetPostion"
                }">
                  <slot name="MouthSlot3" >I need eyes please!</slot>        
                </div>
              </div>
              
              <div class$="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot4" class$="${
                  this.MouthSlot4Used ? "MouthSlot4" : "Mouth4ResetPostion"
                }">
                  <slot name="MouthSlot4" >I need eyes please!</slot>        
                </div>
              </div>
        
          </div>
          
          <div class$="${this.silhouette === 1 ? "" : "hidden"}">
            <slot name="pickedsilhouette1">I need a body please!</slot>
          </div>
          <div class$="${this.silhouette === 2 ? "" : "hidden"}">
            <slot name="pickedsilhouette2">I need a body please!</slot>
          </div>
          <div class$="${this.silhouette === 3 ? "" : "hidden"}">
            <slot name="pickedsilhouette3">I need a body please!</slot>
          </div>
          <div class$="${this.silhouette === 4 ? "" : "hidden"}">
            <slot name="pickedsilhouette4">I need a body please!</slot>
          </div>
          <div class$="${this.silhouette === 5 ? "" : "hidden"}">
            <slot name="pickedsilhouette5">I need a body please!</slot>
          </div>

        </div>

      </div>

      <div id='SilhouetteSelector' class$="${
        this.customize ? "silhouette" : "DisableCustomize"
      }">
      
        <div on-click="${() =>
          this.Pick(1)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot  name="silhouette1"><div class="MissingImage">Please supply Silhouette1.png</div></slot>
          <iron-icon class$="${
            this.level >= 1 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
          </div>
          
          <div on-click="${() =>
            this.Pick(2)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <iron-icon class$="${
            this.level >= 2 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center" icon="lock"></iron-icon>
          <slot  name="silhouette2"><div class="MissingImage">Please supply Silhouette2.png</div></slot>
        </div>
        
        <div on-click="${() =>
          this.Pick(3)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot  name="silhouette3"><div class="MissingImage">Please supply Silhouette3.png</div></slot>
          <iron-icon class$="${
            this.level >= 3 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
        </div>

        <div on-click="${() =>
          this.Pick(4)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot   name="silhouette4"><div class="MissingImage">Please supply Silhouette4.png</div></slot>
          <iron-icon class$="${
            this.level >= 4 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
        </div>

        <div on-click="${() =>
          this.Pick(5)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot   name="silhouette5"><div class="MissingImage">Please supply Silhouette5.png</div></slot>
          <iron-icon class$="${
            this.level >= 4 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
        </div>
      </div>

     </div>
    
        `;
  }

  Pick(e) {
    console.log(e);
    if (e <= this.level) {
      this.silhouette = e;
    }
  }

  static get is() {
    return "monster-creator";
  }
}

customElements.define(MonsterCreator.is, MonsterCreator);
