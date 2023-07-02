import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
export default function TextEditor() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  console.log(convertToRaw(editorState.getCurrentContent()));
  const htmlContent = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  return (
    <div className="shadow-lg w-full m-auto ">
      <Editor
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName=" bg-white shadow-lg max-w-5xl mx-auto border p-10"
        onEditorStateChange={(e) => seteditorState(e)}
        editorState={editorState}
      />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
