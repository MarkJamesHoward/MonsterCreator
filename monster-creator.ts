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
@customElement("monster-creator" as any)
//@ts-ignore
class MonsterCreator extends GestureEventListeners(LitElement) {
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyex;
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyey;
  @property({ type: Number, reflect: true, attribute: true })
  selectedeyeindex;

  @property({ type: Number, reflect: true, attribute: true })
  selectedmouthx;
  @property({ type: Number, reflect: true, attribute: true })
  selectedmouthy;
  @property({ type: Number, reflect: true, attribute: true })
  selectedmouthindex;

  @property({ type: Number, reflect: true, attribute: true })
  selectedsilhouetteindex;

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
  MouthSlot1Used = false;
  @property({ type: Boolean, attribute: false })
  MouthSlot2Used = false;
  @property({ type: Boolean, attribute: false })
  MouthSlot3Used = false;

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

    //Update ViewBox on SVG slotted elements
    // let mySVG2 = this.shadowRoot
    //   .querySelector("#pickedsilhouette1")
    //   .assignedNodes()[0];
    // mySVG2.setAttribute("viewBox", "0 0 100 100");

    // let mySVG3 = this.shadowRoot
    //   .querySelector("#pickedsilhouette2")
    //   .assignedNodes()[0];
    // mySVG3.setAttribute("viewBox", "0 0 150 150");

    // let mySVG4 = this.shadowRoot
    //   .querySelector("#pickedsilhouette3")
    //   .assignedNodes()[0];
    // mySVG4.setAttribute("viewBox", "0 0 30 30");

    let node: any;

    switch (this.selectedmouthindex) {
      case 1:
        this.MouthSlot1Used = true;
        //@ts-ignore
        node = this.shadowRoot.querySelector("#MouthSlot1");
        node.style.left = this.selectedmouthx + "%";
        node.style.top = this.selectedmouthy + "%";
        console.log("moving mouth left and top");
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
  }

  handleTrackEye1(e) {
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

  handleTrackEye(e: any, item: any, index: Number) {
    //@ts-ignore
    let container = this.shadowRoot.querySelector("#eyesandsilcontainer");
    switch (index) {
      case 1:
        this.EyesSlot2Used = false;
        this.EyesSlot3Used = false;
        break;
      case 2:
        this.EyesSlot1Used = false;
        this.EyesSlot3Used = false;
        break;
      case 3:
        this.EyesSlot1Used = false;
        this.EyesSlot2Used = false;
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
        console.log("tracing in progress");
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
        break;
      case 2:
        this.MouthSlot1Used = false;
        this.MouthSlot3Used = false;
        break;
      case 3:
        this.MouthSlot1Used = false;
        this.MouthSlot2Used = false;
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
        console.log("selected mouth Y " + this.selectedmouthy);
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
          grid-template-areas: "main";
          height: 100%;
        }

        .NoPadlock {
          display: none;
        }

        .hidden {
          display: none;
        }

        .DisableCustomize {
          display: none;
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
          flex-grow: 1;
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

        ::slotted(svg) {
          width: 100%;
          height: 100%;
        }

        div.silhouettePicker ::slotted(svg) {
          max-width: 200px;
        }

        ::slotted(img) {
          width: 100%;
          max-width: 50px;
          object-fit: contain;
        }

        .MouthSlot1,
        .MouthSlot2,
        .MouthSlot3 {
          position: absolute;
          width: 30%;
          max-width: 150px;
        }

        .EyesSlot1,
        .EyesSlot2,
        .EyesSlot3 {
          position: absolute;
          width: 30%;
          max-width: 150px;
        }

        #eyesandsilcontainer {
          height: 100%;
        }
      </style>

      <div class="CharacterCustomizeMain">
        <div id="eyesandsilcontainer" style="position:relative">
          <div class="eyes">
            <div
              class="${
                this.customize != "Yes" && this.EyesSlot1Used == false
                  ? "DisableCustomize"
                  : ""
              }"
            >
              <div
                id="EyesSlot1"
                class="${this.EyesSlot1Used ? "EyesSlot1" : "Eye1ResetPostion"}"
              >
                <slot name="EyesSlot1"></slot>
              </div>
            </div>

            <div
              class="${
                this.customize != "Yes" && this.EyesSlot2Used == false
                  ? "DisableCustomize"
                  : ""
              }"
            >
              <div
                id="EyesSlot2"
                class="${this.EyesSlot2Used ? "EyesSlot2" : "Eye2ResetPostion"}"
              >
                <slot name="EyesSlot2"></slot>
              </div>
            </div>

            <div
              class="${
                this.customize != "Yes" && this.EyesSlot3Used == false
                  ? "DisableCustomize"
                  : ""
              }"
            >
              <div
                id="EyesSlot3"
                class="${this.EyesSlot3Used ? "EyesSlot3" : "Eye3ResetPostion"}"
              >
                <slot name="EyesSlot3"></slot>
              </div>
            </div>
          </div>

          <div class="mouth">
            <div
              class="${
                this.customize != "Yes" && this.MouthSlot1Used == false
                  ? "DisableCustomize"
                  : ""
              }"
            >
              <div class="${this.level > 0 ? "" : "hidden"}">
                <div
                  id="MouthSlot1"
                  class="${
                    this.MouthSlot1Used ? "MouthSlot1" : "Mouth1ResetPostion"
                  }"
                ></div>
                <slot name="MouthSlot1"></slot>
              </div>
            </div>

            <div
              class="${
                this.customize != "Yes" && this.MouthSlot2Used == false
                  ? "DisableCustomize"
                  : ""
              }"
            >
              <div class="${this.level > 1 ? "" : "hidden"}">
                <div
                  id="MouthSlot2"
                  class="${
                    this.MouthSlot2Used ? "MouthSlot2" : "Mouth2ResetPostion"
                  }"
                >
                  <slot name="MouthSlot2"></slot>
                </div>
              </div>
            </div>

            <div
              class="${
                this.customize != "Yes" && this.MouthSlot3Used == false
                  ? "DisableCustomize"
                  : ""
              }"
            >
              <div class="${this.level > 2 ? "" : "hidden"}">
                <div
                  id="MouthSlot3"
                  class="${
                    this.MouthSlot3Used ? "MouthSlot3" : "Mouth3ResetPostion"
                  }"
                >
                  <slot name="MouthSlot3"></slot>
                </div>
              </div>
            </div>
          </div>

          <div class="OverlayTwoItemsCharacter">
            <div
              style="grid-area:main; margin: 0 auto;height: 100%"
              class="${this.selectedsilhouetteindex == 1 ? "" : "hidden"}"
            >
              <slot id="pickedsilhouette1" name="pickedsilhouette1"></slot>
            </div>

            <div
              style="grid-area:main;  margin: 0 auto; height: 100%"
              class="${this.selectedsilhouetteindex == 2 ? "" : "hidden"}"
            >
              <slot
                style="margin: 0 auto; height: 100%"
                id="pickedsilhouette2"
                name="pickedsilhouette2"
              ></slot>
            </div>

            <div
              style="grid-area:main;  margin: 0 auto; height: 100%"
              class="${this.selectedsilhouetteindex == 3 ? "" : "hidden"}"
            >
              <slot
                style="margin: 0 auto; height: 100%"
                id="pickedsilhouette3"
                name="pickedsilhouette3"
              ></slot>
            </div>
          </div>
        </div>

        <div
          id="SilhouetteSelector"
          class="${this.customize == "Yes" ? "silhouette" : "DisableCustomize"}"
        >
          <div
            @click="${
              () => {
                let star = this.DetermineShapeToMorphFrom();
                this.PerformMorph(
                  star,
                  this.shadowRoot.querySelector("#pickedsilhouette1")
                );
                this.Pick(1);
              }
            }"
            class="silhouettePicker"
          >
            <slot name="silhouette1" id="silhouette1">Missing</slot>
          </div>

          <div
            @click="${
              () => {
                let star = this.DetermineShapeToMorphFrom();
                this.PerformMorph(
                  star,
                  this.shadowRoot.querySelector("#pickedsilhouette2")
                );
                this.Pick(2);
              }
            }"
            class="silhouettePicker"
          >
            <iron-icon
              style="grid-area:main;z-index:2;align-self:center;justify-self:center"
              icon="lock"
            ></iron-icon>
            <slot name="silhouette2" id="silhouette2"
              ><div class="MissingImage">Please supply Silhouette2</div></slot
            >
          </div>

          <div
            @click="${
              () => {
                let star = this.DetermineShapeToMorphFrom();
                this.PerformMorph(
                  star,
                  this.shadowRoot.querySelector("#pickedsilhouette3")
                );
                this.Pick(3);
              }
            }"
            class="silhouettePicker"
          >
            <slot name="silhouette3" id="silhouette3"
              ><div class="MissingImage">Please supply Silhouette3</div></slot
            >
            <iron-icon
              class="${this.level >= 2 ? "" : "hidden"}"
              style="grid-area:main;z-index:2;align-self:center;justify-self:center"
              icon="lock"
            ></iron-icon>
          </div>
        </div>
      </div>
    `;
  }

  PerformMorph(startShape, targetElement) {
    console.log("StartShape " + (startShape || "no start shape"));
    console.log("targetElement " + (targetElement || "no target element"));

    if (!startShape) {
      return;
    }

    let targetElementPath = targetElement.assignedNodes()[0].childNodes[1];

    console.dir(targetElementPath);
    const endShape = targetElementPath.getAttribute("d");

    let StartAndEndShapeMorph = interpolate(startShape, endShape, {
      maxSegmentLength: 2
    });

    let target = styler(targetElementPath).set("d");

    console.log("Perform Morph");
    tween({
      duration: 700,
      ease: easing.easeInOut
    })
      .pipe(StartAndEndShapeMorph)
      //@ts-ignore
      .start(target);
  }

  DetermineShapeToMorphFrom() {
    let targetElementPath;

    switch (this.selectedsilhouetteindex) {
      case 1:
        targetElementPath = this.shadowRoot
          .querySelector("#pickedsilhouette1")
          .assignedNodes()[0]
          .childNodes[1].getAttribute("d");
        break;
      case 2:
        targetElementPath = this.shadowRoot
          .querySelector("#pickedsilhouette2")
          .assignedNodes()[0]
          .childNodes[1].getAttribute("d");
        break;
      case 3:
        targetElementPath = this.shadowRoot
          .querySelector("#pickedsilhouette3")
          .assignedNodes()[0]
          .childNodes[1].getAttribute("d");
        break;
      case 4:
        targetElementPath = this.shadowRoot
          .querySelector("#pickedsilhouette4")
          .assignedNodes()[0]
          .childNodes[1].getAttribute("d");
        break;
      case 5:
        targetElementPath = this.shadowRoot
          .querySelector("#pickedsilhouette5")
          .assignedNodes()[0]
          .childNodes[1].getAttribute("d");
        break;
    }

    return targetElementPath;
  }

  Pick(e) {
    console.log("pick");
    console.log(e);
    console.log("level " + this.level);
    if (e <= this.level) {
      this.selectedsilhouetteindex = e;
    }
  }
}
