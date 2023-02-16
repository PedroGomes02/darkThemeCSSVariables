import { useState } from "react";
import "./styles.css";

// document.documentElement returns the Element that is the root
// element of the document (for example, the <html> element for HTML documents).
// document.documentElement = document.querySelector(':root')

export default function App() {
  const handleClickClassList = () => {
    const html: any = document.querySelector("html");

    console.log(html?.classList.contains("darkTheme")); //usar contains instead of includes

    if ([...html?.classList].includes("darkTheme")) {
      html?.classList.remove("darkTheme");
    } else {
      html?.classList.add("darkTheme");
    }
  };

  const handleClickAttribute = () => {
    // check default user theme!
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (document.documentElement.getAttribute("dataTheme") === "light") {
      document.documentElement.setAttribute("dataTheme", "dark");
    } else {
      document.documentElement.setAttribute("dataTheme", "light");
    }
    console.log(document.documentElement.hasAttribute("dataTheme"), "has");
    //document.documentElement.removeAttribute("dataTheme")
    console.log(document.documentElement.nodeName);
  };

  // CHECK VARIABLES IN CSS
  // GET AND SET VARIABLE FROM INLINE STYLE
  // const root: any = document.querySelector(":root");
  // root.style.setProperty("--primaryColor", "gray");
  // console.log(root.style.getPropertyValue("--primaryColor"));

  // const root: any = document.querySelector(":root");
  // const primary: any = getComputedStyle(root).getPropertyValue("--primaryColor");
  // console.log(primary);
  // root.style.setProperty("--primaryColor", "gray");

  // Set property for entire application: document.documentElement.style.setProperty("--primaryColor", "gray")

  // Having a object Theme like: dark{primary:black, secondary:'white'}
  // for (let value of dark) {
  // document.documentElement.style.setProperty(`--${value}`, dark[value])}

  const [colorMemory, setColorMemory] = useState("#c42727");

  const onchangeHandler = (e: any) => {
    console.log(e.target.value);
    document.documentElement.style.setProperty(
      "--primaryColor",
      e.target.value
    );
    setColorMemory(e.target.value);
  };

  return (
    <div className="App">
      <h1>Dark Theme Changing with CSS Variables</h1>
      <h2>Start click to see some magic happen!</h2>
      <button onClick={handleClickClassList}>
        CHANGE THEME WITH CLASS IN :ROOT
      </button>

      <button onClick={handleClickAttribute}>
        CHANGE THEME WITH ATTRIBUTE IN :root Element
      </button>

      <label>
        Choose color theme:
        <input
          type="color"
          name="Theme"
          value={colorMemory}
          id="theme"
          onChange={onchangeHandler}
        />
      </label>
    </div>
  );
}
