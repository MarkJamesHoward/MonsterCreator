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

    Gestures.addListener(this, "track", this.handleTrack.bind(this));
  }

  handleTrack(e) {
    console.log("handling track " + e.detail.state);
    switch (e.detail.state) {
      case "start":
        this.message = "Tracking started!";
        break;
      case "track":
        this.message =
          "Tracking in progress... " + e.detail.x + ", " + e.detail.y;
        break;
      case "end":
        this.message = "Tracking ended!";
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
      allowMoveEyesRight: Boolean,
      allowMoveEyesLeft: Boolean,
      allowMouthMoveRight: Boolean,
      allowMouthMoveLeft: Boolean,
      locks: Array,
      message: String
    };
  }

  AllowMouthMoveRight() {
    if (this.mouth >= this.NUMBER_OF_IMAGES_MOUTH || this.mouth >= this.level) {
      return false;
    } else {
      return true;
    }
  }

  AllowMouthMoveLeft() {
    if (this.mouth <= 1) {
      return false;
    } else {
      return true;
    }
  }

  AllowEyesMoveRight() {
    if (this.eyes >= this.NUMBER_OF_IMAGES_EYES || this.eyes >= this.level) {
      return false;
    } else {
      return true;
    }
  }

  AllowEyesMoveLeft() {
    if (this.eyes <= 1) {
      return false;
    } else {
      return true;
    }
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
    allowMouthMoveLeft,
    allowMouthMoveRight,
    allowMoveEyesLeft,
    allowMoveEyesRight,
    locks
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
        max-height: 100vmin;
        display: grid;
        grid-template-columns: [eyes-start SilhouetteBackground-start mouth-start silhouette-start] 1fr [ SilhouetteBackground-end silhouette-end eyes-end mouth-end];
        grid-template-rows: [eyes-start SilhouetteBackground-start] 20fr [eyes-end mouth-start] 20fr [mouth-end] 20fr [SilhouetteBackground-end silhouette-start] 40fr [silhouette-end];
        border-radius: 10%;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    
      .CompleteCharacter {
        display: none;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
      }
    
      .eyes,
      .mouth {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    
      .character {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    
    
      .SilhouetteBackgroundContainer {
        align-self: center;
        grid-area: SilhouetteBackground;
        width: 100%;
        height: 100%;
      }
    
      .mouthselector {
        grid-area: mouth;
        width: 100%;
      }
    
      .eyesselector {
        grid-area: eyes;
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

      ::slotted(img.MouthSlot), ::slotted(img.EyesSlot) {
        width:100%;
      }
    
      .RightArrow,
      .LeftArrow {
        transition: all 0.2s ease-in-out;
        background-color: red;
        <!-- border-radius: 5%; -->
        font-size: 30px; font-weight: 2000;
      }

      .LeftArrow:hover, .RightArrow:hover {
      }

      --paper-icon-button-hover {
        transform: scale(1.1);
      }
    
      .ArrowDisabled {
        opacity: 0.4;
      }
    

    </style>
    <div class="CharacterCustomizeMain">
    
    ${this.message}

    <iron-icon icon="maps:directions-bus">right arrw</iron-icon>


      <div class='SilhouetteBackgroundContainer'>

              <div class$="${this.silhouette === 1 ? "" : "hidden"}">
                <slot name="pickedsilhouette1" >I need a body please!</slot>
              </div>
              <div class$="${this.silhouette === 2 ? "" : "hidden"}">
                <slot name="pickedsilhouette2" >I need a body please!</slot>
              </div>
              <div class$="${this.silhouette === 3 ? "" : "hidden"}">
                <slot name="pickedsilhouette3" >I need a body please!</slot>
              </div>
              <div class$="${this.silhouette === 4 ? "" : "hidden"}">
                <slot name="pickedsilhouette4" >I need a body please!</slot>
              </div>
              <div class$="${this.silhouette === 5 ? "" : "hidden"}">
                <slot name="pickedsilhouette5" >I need a body please!</slot>
              </div>

      </div>
    
    
      <div class='eyesselector'>
        <div class='eyes'>
    
          <div class$="${this.customize ? "" : "DisableCustomize"}">
              <iron-icon icon="arrow-back" class$="${
                this.AllowEyesMoveLeft()
                  ? "LeftArrow"
                  : "LeftArrow ArrowDisabled"
              }" 
              on-click="${() => this.moveEyesLeft()}">
            </iron-icon>
          </div>


    
          <div style="width:30%">
            
              <div class$="${this.eyes === 1 ? "" : "hidden"}">
                <slot name="EyesSlot1" >I need eyes please!</slot>
              </div>
              <div class$="${this.eyes === 2 ? "" : "hidden"}">
                <slot name="EyesSlot2" >I need eyes please!</slot>
              </div>
              <div class$="${this.eyes === 3 ? "" : "hidden"}">
                <slot name="EyesSlot3" >I need eyes please!</slot>
              </div>
              <div class$="${this.eyes === 4 ? "" : "hidden"}">
                <slot name="EyesSlot4" >I need eyes please!</slot>
              </div>

          </div>
    
          <div class$="${this.customize ? "" : "DisableCustomize"}">
              <iron-icon icon="arrow-forward" class$="${
                this.AllowEyesMoveRight()
                  ? "RightArrow"
                  : "RightArrow ArrowDisabled"
              }" 
              on-click="${() => this.moveEyesRight()}">
            </iron-icon>
          </div>

        </div>

      </div>
    
      <div class="mouthselector">
        <div class='mouth'>
        
        <div class$="${this.customize ? "" : "DisableCustomize"}">
          <iron-icon icon="arrow-back" class$="${
            this.AllowMouthMoveLeft() ? "LeftArrow" : "LeftArrow ArrowDisabled"
          }" 
          on-click="${() => this.moveMouthLeft()}">
        </iron-icon>
        </div>
    
        <div style="width:30%">
          <div class$="${this.mouth === 1 ? "" : "hidden"}">
                <slot name="MouthSlot1" >I need a mouth to eat please!</slot>
              </div>
              <div class$="${this.mouth === 2 ? "" : "hidden"}">
                <slot name="MouthSlot2" >I need a mouth to eat please!</slot>
              </div>
              <div class$="${this.mouth === 3 ? "" : "hidden"}">
                <slot name="MouthSlot3" >I need a mouth to eat please!</slot>
              </div>
              <div class$="${this.mouth === 4 ? "" : "hidden"}">
                <slot name="MouthSlot4" >I need a mouth to eat please!</slot>
              </div>
              <div class$="${this.mouth === 5 ? "" : "hidden"}">
                <slot name="MouthSlot5" >I need a mouth to eat please!</slot>
              </div>
        </div>
    
        <div class$="${this.customize ? "" : "DisableCustomize"}">
          <paper-icon-button icon="arrow-forward" class$="${
            this.AllowMouthMoveRight()
              ? "RightArrow"
              : "RightArrow ArrowDisabled"
          }" 
          on-click="${() => this.moveMouthRight()}">
        </paper-icon-button>
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

  moveEyesLeft() {
    console.log(this.eyes);
    if (this.eyes > 1) {
      this.eyes--;
      this.allowMoveEyesRight = true;
    }
  }

  moveEyesRight() {
    console.log(this.eyes);
    if (this.eyes < this.NUMBER_OF_IMAGES_EYES && this.eyes < this.level) {
      this.eyes++;
      this.allowMoveEyesLeft = true;
    }
  }

  moveMouthLeft() {
    console.log("move mouth left " + this.mouth);
    if (this.mouth > 1) {
      this.mouth--;
      this.allowMouthMoveRight = true;
    }
  }

  moveMouthRight() {
    if (this.mouth < this.NUMBER_OF_IMAGES_MOUTH && this.mouth < this.level) {
      this.mouth++;
      this.allowMouthMoveLeft = true;
    }
  }

  static get is() {
    return "monster-creator";
  }
}

customElements.define(MonsterCreator.is, MonsterCreator);
