import { useState } from "react";
import "./App.css";
import Faq from "./Faq";

function App() {
  const [curopen, setCuropen] = useState(1);
  const faq = [
    {
      id: 1,
      qestion: "What is HTML",
      response:
        "Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.",
    },
    {
      id: 2,
      qestion: "What is CSS?",
      response:
        "CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. CSS is popularly called the design language of the web.",
    },
    {
      id: 3,
      qestion: "What is JavaScript?",
      response:
        "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third of the web trio.",
    },
    {
      id: 4,
      qestion: "What is React?",
      response:
        "React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook.",
    },
    {
      id: 5,
      qestion: "What is Node JS?",
      response:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm",
    },
  ];
  return (
    <div className="App">
      {faq.map((item) => (
        <Faq
          item={item}
          key={item.id}
          curopen={curopen}
          setCuropen={setCuropen}
        />
      ))}
    </div>
  );
}

export default App;
