import React from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const Write = (props) => {
  const editor = new Editor({
    el: document.querySelector("#editor"),
    height: "600px",
    initialEditType: "markdown",
    previewStyle: "vertical",
  });
  return (
    <React.Fragment>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </React.Fragment>
  );
};

export default Write;
