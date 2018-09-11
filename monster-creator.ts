import { LitElement, html, property } from "@polymer/lit-element";
import { GestureEventListeners } from "@polymer/polymer/lib/mixins/gesture-event-listeners";
import * as Gestures from "@polymer/polymer/lib/utils/gestures";

// import "@polymer/iron-icons/iron-icons.js";
// import "@polymer/paper-icon-button";

//@ts-ignore
class MonsterCreator extends GestureEventListeners(LitElement) {
  @property()
  selectedEyeX;
  @property()
  selectedEyeY;
  @property()
  selectedEyeIndex;
  @property()
  selectedMouthIndex;
  @property()
  selectedMouthX;
  @property()
  selectedMouthY;
  @property()
  selectedSilhouetteIndex;
  @property()
  eyes = 1;
  @property()
  mouth = 1;
  @property()
  silhouette = 1;
  @property()
  NUMBER_OF_IMAGES_EYES = 4;
  @property()
  NUMBER_OF_IMAGES_MOUTH = 5;
  @property()
  NUMBER_OF_IMAGES_SILHOUETTES = 5;
  @property()
  locks = [];
  @property()
  level = 1;
  @property({ type: Boolean })
  customize = true;
  @property()
  EyesSlot1Used = false;
  @property()
  EyesSlot2Used = false;
  @property()
  EyesSlot3Used = false;
  @property()
  EyesSlot4Used = false;
  @property()
  MouthSlot2Used = false;
  @property()
  MouthSlot3Used = false;
  @property()
  MouthSlot4Used = false;
  @property()
  MouthSlot1Used = false;

  constructor() {
    super();
    console.log("created2");
  }

  ready() {
    console.log("ready called");
    console.log("sil " + this.silhouette);
    console.log("customil " + this.customize);

    console.dir(this.shadowRoot.querySelector("#level"));

    console.log("afet null");
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot1"),
      "track",
      this.handleTrackEye1.bind(this)
    );
    //@ts-ignore
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot2"),
      "track",
      this.handleTrackEye2.bind(this)
    );
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot3"),
      "track",
      this.handleTrackEye3.bind(this)
    );
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot4"),
      "track",
      this.handleTrackEye4.bind(this)
    );

    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot1"),
      "track",
      this.handleTrackMouth1.bind(this)
    );
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot2"),
      "track",
      this.handleTrackMouth2.bind(this)
    );
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot3"),
      "track",
      this.handleTrackMouth3.bind(this)
    );
    Gestures.addListener(
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot4"),
      "track",
      this.handleTrackMouth4.bind(this)
    );
  }

  handleTrackEye1(e) {
    console.log("call");
    this.handleTrackEye(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot1"),
      1
    );
    this.EyesSlot1Used = true;
  }
  handleTrackEye2(e) {
    this.handleTrackEye(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot2"),
      2
    );
    this.EyesSlot2Used = true;
  }
  handleTrackEye3(e) {
    this.handleTrackEye(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot3"),
      3
    );
    this.EyesSlot3Used = true;
  }
  handleTrackEye4(e) {
    this.handleTrackEye(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#EyesSlot4"),
      4
    );
    this.EyesSlot4Used = true;
  }

  handleTrackMouth1(e) {
    this.handleTrackMouth(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot1"),
      1
    );
    this.MouthSlot1Used = true;
  }
  handleTrackMouth2(e) {
    this.handleTrackMouth(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot2"),
      2
    );
    this.MouthSlot2Used = true;
  }
  handleTrackMouth3(e) {
    this.handleTrackMouth(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot3"),
      3
    );
    this.MouthSlot3Used = true;
  }
  handleTrackMouth4(e) {
    this.handleTrackMouth(
      e,
      //@ts-ignore
      this.shadowRoot.querySelector("#MouthSlot4"),
      4
    );
    this.MouthSlot4Used = true;
  }

  handleTrackEye(e: any, item: any, index: Number) {
    //@ts-ignore
    let container = this.shadowRoot.querySelector("#eyesandsilcontainer");
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
        this.selectedEyeIndex = index;
        this.selectedEyeX = item.style.left;
        this.selectedEyeY = item.style.top;
        console.log(item.trackX);
        console.log(item.trackY);
        break;
    }
  }

  handleTrackMouth(e, item: any, index: Number) {
    //@ts-ignore
    let container = this.shadowRoot.querySelector("#eyesandsilcontainer");
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
        item.trackX = item.style.left;
        item.trackY = item.style.top;
        this.selectedMouthIndex = index;
        this.selectedMouthX = item.style.left;
        this.selectedMouthY = item.style.top;
        console.log(item.trackX);
        console.log(item.trackY);
        break;
    }
  }

  LevelUp() {
    this.level++;
    this.ready();
  }

  render() {
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
        grid-template-rows: 1fr 1fr;
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

    <button @click="${() => {
      this.LevelUp();
    }}" id="level">Level++</button>

    <div>Level: ${this.level}</div>

    <div class="CharacterCustomizeMain">

      <div class='SilhouetteBackgroundContainer'>

        <div id="eyesandsilcontainer" style="position:relative">  

          <div class="eyes">
            <div id="EyesSlot1" class="${
              this.EyesSlot1Used ? "EyesSlot1" : "Eye1ResetPostion"
            }">
              <slot name="EyesSlot1" >I need eyes please!</slot>
            </div>

            <div id="EyesSlot2" class="${
              this.EyesSlot2Used ? "EyesSlot2" : "Eye2ResetPostion"
            }">
              <slot name="EyesSlot2" >I need eyes please!</slot>
            </div>

            <div id="EyesSlot3" class="${
              this.EyesSlot3Used ? "EyesSlot3" : "Eye3ResetPostion"
            }">
              <slot name="EyesSlot3" >I need eyes please!</slot>
            </div>

            <div class="${this.level > 3 ? "" : "hidden"}">
              <div id="EyesSlot4" class="${
                this.EyesSlot4Used ? "EyesSlot4" : "Eye4ResetPostion"
              }">
                <slot name="EyesSlot4" >I need eyes please!</slot>        
              </div>
            </div>
          </div>

          <div class='mouth'>
              <div class="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot1" class="${
                  this.MouthSlot1Used ? "MouthSlot1" : "Mouth1ResetPostion"
                }">
                  <slot name="MouthSlot1" >I need eyes please!</slot>        
                </div>
              </div>

              <div class="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot2" class="${
                  this.MouthSlot2Used ? "MouthSlot2" : "Mouth2ResetPostion"
                }">
                  <slot name="MouthSlot2" >I need eyes please!</slot>        
                </div>
              </div>

              <div class="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot3" class="${
                  this.MouthSlot3Used ? "MouthSlot3" : "Mouth3ResetPostion"
                }">
                  <slot name="MouthSlot3" >I need eyes please!</slot>        
                </div>
              </div>
              
              <div class="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot4" class="${
                  this.MouthSlot4Used ? "MouthSlot4" : "Mouth4ResetPostion"
                }">
                  <slot name="MouthSlot4" >I need eyes please!</slot>        
                </div>
              </div>
        
          </div>
          
          <div class="${this.silhouette === 1 ? "" : "hidden"}">
            <slot name="pickedsilhouette1">I need a body please!</slot>
          </div>
          <div class="${this.silhouette === 2 ? "" : "hidden"}">
            <slot name="pickedsilhouette2">I need a body please!</slot>
          </div>
          <div class="${this.silhouette === 3 ? "" : "hidden"}">
            <slot name="pickedsilhouette3">I need a body please!</slot>
          </div>
          <div class="${this.silhouette === 4 ? "" : "hidden"}">
            <slot name="pickedsilhouette4">I need a body please!</slot>
          </div>
          <div class="${this.silhouette === 5 ? "" : "hidden"}">
            <slot name="pickedsilhouette5">I need a body please!</slot>
          </div>

        </div>

      </div>

      <div id='SilhouetteSelector' class="${
        this.customize ? "silhouette" : "DisableCustomize"
      }">
      
        <div @click="${() =>
          this.Pick(1)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot name="silhouette1"><div class="MissingImage">Please supply Silhouette1.png</div></slot>
          <iron-icon class="${
            this.level >= 1 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
          </div>
          
          <div @click="${() =>
            this.Pick(2)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <iron-icon class="${
            this.level >= 2 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center" icon="lock"></iron-icon>
          <slot name="silhouette2"><div class="MissingImage">Please supply Silhouette2.png</div></slot>
        </div>
        
        <div @click="${() =>
          this.Pick(3)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot name="silhouette3"><div class="MissingImage">Please supply Silhouette3.png</div></slot>
          <iron-icon class="${
            this.level >= 3 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
        </div>

        <div @click="${() =>
          this.Pick(4)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot   name="silhouette4"><div class="MissingImage">Please supply Silhouette4.png</div></slot>
          <iron-icon class="${
            this.level >= 4 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
        </div>

        <div @click="${() =>
          this.Pick(5)}" class="OverlayTwoItemsCharacter silhouettePicker">
          <slot name="silhouette5"><div class="MissingImage">Please supply Silhouette5.png</div></slot>
          <iron-icon class="${
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
      this.selectedSilhouetteIndex = e;
    }
  }

  static get is() {
    return "monster-creator";
  }
}

customElements.define(MonsterCreator.is, MonsterCreator);
