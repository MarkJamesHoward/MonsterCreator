import {
  LitElement,
  html,
  property,
  customElement
} from "@polymer/lit-element";
import { GestureEventListeners } from "@polymer/polymer/lib/mixins/gesture-event-listeners";
import * as Gestures from "@polymer/polymer/lib/utils/gestures";

// import "@polymer/iron-icons/iron-icons.js";
// import "@polymer/paper-icon-button";

//@ts-ignore
@customElement("monster-creator")
class MonsterCreator extends GestureEventListeners(LitElement) {
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyex;
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyey;
  @property({ type: Number, reflect: true, attribute: true })
  selectedmouthindex;
  @property({ type: Number, reflect: true, attribute: true })
  selectedmouthx;
  @property({ type: Number, reflect: true, attribute: true })
  selectedmouthy;
  @property({ type: Number, reflect: true, attribute: true })
  selectedsilhouetteindex;
  @property({ type: Number })
  NUMBER_OF_IMAGES_EYES = 3;
  @property({ type: Number })
  NUMBER_OF_IMAGES_MOUTH = 3;
  @property({ type: Number })
  NUMBER_OF_IMAGES_SILHOUETTES = 4;
  @property({ type: Number, attribute: true })
  level = 1;
  @property({ type: String })
  customize = "Yes";
  @property({ type: Boolean, attribute: false })
  EyesSlot1Used = false;
  @property({ type: Boolean, attribute: false })
  EyesSlot2Used = false;
  @property({ type: Boolean, attribute: false })
  EyesSlot3Used = false;
  @property({ type: Boolean, attribute: false })
  EyesSlot4Used = false;
  @property({ type: Boolean, attribute: false })
  MouthSlot2Used = false;
  @property({ type: Boolean, attribute: false })
  MouthSlot3Used = false;
  @property({ type: Boolean, attribute: false })
  MouthSlot4Used = false;
  @property({ type: Boolean, attribute: false })
  MouthSlot1Used = false;
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyeindex;

  firstUpdated() {
    console.log("first updated called");
    this.ready();
  }

  constructor() {
    super();
    this.level = 5;
    this.selectedsilhouetteindex = 2;
  }

  ready() {
    console.log("ready called");

    let node: any;

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
        this.selectedmouthindex = index;
        this.selectedmouthx = item.style.left.substring(0, 2);
        this.selectedmouthy = item.style.top.substring(0, 2);
        console.log("selected mouth index " + this.selectedmouthindex);
        console.log("selected mouth X " + this.selectedmouthx);
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
        height: 100%;
        width: 100%;
        margin: 0 auto;
      }
              
      .eyes,
      .mouth {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    
      .silhouette {
        display: flex;
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
        width:50%;
        max-width: 150px;
        object-fit: contain;
      } 

      ::slotted(img.SilhouetteSlot) {
        width:50%;
        max-width: 300px;
        display: block; 
        margin: 0 auto!important;
      }


    .MouthSlot1, .MouthSlot2 , .MouthSlot3, .MouthSlot4 {
      position:absolute;
      width: 20%;
      max-width: 150px;
    }

    .EyesSlot1, .EyesSlot2, .EyesSlot3, .EyesSlot4{
      position:absolute;
      width: 20%;
      max-width: 150px;
    }

    </style>



    <div class="CharacterCustomizeMain">

      <div id="eyesandsilcontainer" style="position:relative">  

        <div class="eyes">
          <div class="${
            this.customize != "Yes" && this.EyesSlot1Used == false
              ? "DisableCustomize"
              : ""
          }">
            <div id="EyesSlot1" class="${
              this.EyesSlot1Used ? "EyesSlot1" : "Eye1ResetPostion"
            }">
              <slot name="EyesSlot1" ></slot>
            </div>
          </div>

          <div class="${
            this.customize != "Yes" && this.EyesSlot2Used == false
              ? "DisableCustomize"
              : ""
          }">
            <div id="EyesSlot2" class="${
              this.EyesSlot2Used ? "EyesSlot2" : "Eye2ResetPostion"
            }">
              <slot name="EyesSlot2" ></slot>
            </div>
          </div>

          <div class="${
            this.customize != "Yes" && this.EyesSlot3Used == false
              ? "DisableCustomize"
              : ""
          }">
            <div id="EyesSlot3" class="${
              this.EyesSlot3Used ? "EyesSlot3" : "Eye3ResetPostion"
            }">
              <slot name="EyesSlot3" ></slot>
            </div>
          </div>

          <div class="${
            this.customize != "Yes" && this.EyesSlot4Used == false
              ? "DisableCustomize"
              : ""
          }">
            <div class="${this.level > 3 ? "" : "hidden"}">
              <div id="EyesSlot4" class="${
                this.EyesSlot4Used ? "EyesSlot4" : "Eye4ResetPostion"
              }">
                <slot name="EyesSlot4" ></slot>        
              </div>
            </div>
          </div>


        </div>

        <div class='mouth'>

          <div class="${
            this.customize != "Yes" && this.MouthSlot1Used == false
              ? "DisableCustomize"
              : ""
          }">
              <div class="${this.level > 0 ? "" : "hidden"}">
                <div id="MouthSlot1" class="${
                  this.MouthSlot1Used ? "MouthSlot1" : "Mouth1ResetPostion"
                }">
                  <slot name="MouthSlot1" ></slot>        
                </div>
              </div>
          </div>

          <div class="${
            this.customize != "Yes" && this.MouthSlot2Used == false
              ? "DisableCustomize"
              : ""
          }">
              <div class="${this.level > 1 ? "" : "hidden"}">
                <div id="MouthSlot2" class="${
                  this.MouthSlot2Used ? "MouthSlot2" : "Mouth2ResetPostion"
                }">
                  <slot name="MouthSlot2" ></slot>        
                </div>
              </div>
          </div>

          <div class="${
            this.customize != "Yes" && this.MouthSlot3Used == false
              ? "DisableCustomize"
              : ""
          }">
              <div class="${this.level > 2 ? "" : "hidden"}">
                <div id="MouthSlot3" class="${
                  this.MouthSlot3Used ? "MouthSlot3" : "Mouth3ResetPostion"
                }">
                  <slot name="MouthSlot3" ></slot>        
                </div>
              </div>
          </div>
              
          <div class="${
            this.customize != "Yes" && this.MouthSlot4Used == false
              ? "DisableCustomize"
              : ""
          }">
              <div class="${this.level > 3 ? "" : "hidden"}">
                <div id="MouthSlot4" class="${
                  this.MouthSlot4Used ? "MouthSlot4" : "Mouth4ResetPostion"
                }">
                  <slot name="MouthSlot4" ></slot>        
                </div>
              </div>
          </div>
      
        </div>
    
      <div class="OverlayTwoItemsCharacter">
        <div style="grid-area:main; margin: 0 auto" class="${
          this.selectedsilhouetteindex == 1 ? "" : "hidden"
        }">
          <slot style="margin: 0 auto"  name="pickedsilhouette1"></slot>
        </div>
        <div style="grid-area:main;  margin: 0 auto" class="${
          this.selectedsilhouetteindex == 2 ? "" : "hidden"
        }">
          <slot style="margin: 0 auto"  name="pickedsilhouette2"></slot>
        </div>
        <div style="grid-area:main;  margin: 0 auto" class="${
          this.selectedsilhouetteindex == 3 ? "" : "hidden"
        }">
          <slot style="margin: 0 auto"  name="pickedsilhouette3"></slot>
        </div>
        <div  style="grid-area:main;  margin: 0 auto" class="${
          this.selectedsilhouetteindex == 4 ? "" : "hidden"
        }">
          <slot style="margin: 0 auto"  name="pickedsilhouette4"></slot>
        </div>
        <div style="grid-area:main;  margin: 0 auto" class="${
          this.selectedsilhouetteindex == 5 ? "" : "hidden"
        }">
          <slot style="margin: 0 auto"  name="pickedsilhouette5"></slot>
        </div>
      </div>

      </div>

      <div id='SilhouetteSelector' class="${
        this.customize == "Yes" ? "silhouette" : "DisableCustomize"
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
            this.level >= 5 ? "NoPadlock" : ""
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
      this.selectedsilhouetteindex = e;
    }
  }
}
