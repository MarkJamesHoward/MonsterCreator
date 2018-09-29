import {
  LitElement,
  html,
  property,
  customElement
} from "@polymer/lit-element";
import { GestureEventListeners } from "@polymer/polymer/lib/mixins/gesture-event-listeners";
import * as Gestures from "@polymer/polymer/lib/utils/gestures";

import { tween, styler, easing } from "popmotion";
import { interpolate } from "flubber";

// import "@polymer/iron-icons/iron-icons.js";
// import "@polymer/paper-icon-button";

//@ts-ignore
@customElement("monster-creator")
class MonsterCreator extends GestureEventListeners(LitElement) {
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyex;
  y;
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

      ::slotted(svg)  {
        width: 300px;
      } 

      ::slotted(img) {
        width:50%;
        max-width: 150px;
        object-fit: contain;
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
          <slot id="target"  style="margin: 0 auto"  name="pickedsilhouette5"></slot>
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

        <div @click="${() => {
          let star = "";
          this.DetermineShapeToMorphFrom(star);
          console.log(star);
          const shape = styler(this.querySelector("#pickedsilhouette5"), null);
          const circle =
            "M86,171.5 C38.7796539,171.5 0.5,133.220346 0.5,86 C0.5,38.7796539 38.7796539,0.5 86,0.5 C133.220346,0.5 171.5,38.7796539 171.5,86 C171.5,133.220346 133.220346,171.5 86,171.5 Z";

          console.log("test");
          tween({
            duration: 2000,
            ease: easing.easeInOut
          })
            .pipe(interpolate(star, circle, { maxSegmentLength: 2 }))
            .start(shape.set("d"));

          this.Pick(5);
        }}" 
        class="OverlayTwoItemsCharacter silhouettePicker">
         
          <slot name="silhouette5">
            <div class="MissingImage">
            Please supply Silhouette5.png
            </div>
          </slot>
          <iron-icon class="${
            this.level >= 5 ? "NoPadlock" : ""
          }" style="grid-area:main;z-index:2;align-self:center;justify-self:center"
            icon="lock"></iron-icon>
        </div>
      </div>

    </div>
        `;
  }

  DetermineShapeToMorphFrom(star) {
    if (this.selectedsilhouetteindex === 4) {
      star =
        "M39.812 43.617c-1.576.629-3.814 1.368-5.396.44-1.628-.953-1.817-3.11-1.897-4.819 1.11.71 2.637 1.378 3.667.18.068-.078.028-.185-.067-.216-2.73-.884-4.117-3.846-3.288-6.53.178-.578 3.149-7.777 2.645-11.027-.466-3.009-1.892-4.76-4.51-6.096-2.808-1.432-6.517-1.869-9.418-.458-2.734 1.33-4.357 4.084-4.6 7.07-.271 3.311 1.829 6.085 2.763 9.111.235.763.871 3.13.896 4.33.035 1.67-.497 3.391-1.36 4.856-.799 1.356-2.395 2.305-3.981 2.03a.132.132 0 0 0-.12.224c.998 1.005 2.607 1.093 3.723.279-.397 1.845-1.598 3.4-3.273 4.295-1.18.63-2.56.822-3.641-.09-.93-.784-1.239-2.078-1.527-3.202-.035-.138-.214-.102-.252.01-.628 1.822-.093 3.816 1.297 5.133 1.37 1.297 3.395 1.61 5.161 1.109 2.06-.585 3.597-2.264 4.772-3.967.969-1.404 1.887-2.952 2.373-4.61a43.429 43.429 0 0 1-.749 5.967c-.436 2.215-1.216 5.351-3.987 5.495-.155.008-.16.213-.024.259 2.584.856 5.132-.693 6.413-2.912 1.049-1.817 1.249-3.903 1.163-5.98.436 1.841 1.156 3.582 2.584 4.93 1.769 1.67 4.752 2.05 6.545.211.094-.096-.013-.25-.136-.214-1.898.564-3.723-.659-4.686-2.24-1.014-1.665-1.03-3.776-.985-5.699.89 2.12 2.19 4.369 4.489 5.048 2.262.668 4.647-.618 5.56-2.73.043-.096-.038-.234-.154-.187";
    } else if (this.selectedsilhouetteindex === 3) {
      star =
        "M103.04 162.52L39.36 196l12.16-70.9L0 74.86 71.2 64.5 103.04 0l31.85 64.52 71.2 10.35-51.57 50.22L166.7 196z";
    } else {
      star = "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0";
    }
  }

  Pick(e) {
    console.log(e);
    if (e <= this.level) {
      this.selectedsilhouetteindex = e;
    }
  }
}
