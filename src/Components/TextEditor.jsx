import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
export default function TextEditor() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const htmlContent = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="shadow-lg w-full h-auto m-auto ">
      <h1 className="text-2xl font-semibold text-center mt-2">
        Advance Text Editor
      </h1>
      <button
        onClick={onOpen}
        className="bg-gray-900 py-2 px-4 font-semibold text-white m-auto block my-2"
      >
        Preview
      </button>
      <Editor
        toolbarClassName="flex sticky top-0 z-40 justify-center mx-auto"
        editorClassName="bg-gray-200 mx-4 shadow-lg h-auto min-h-ww mb-4"
        onEditorStateChange={(e) => seteditorState(e)}
        editorState={editorState}
      />

      <ChakraProvider>
        <Modal size={"full"} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Priview</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="m-4 z-50" style={{ width: "100%" }}>
                <div
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                  style={{ width: "100%", overflowX: "auto" }}
                ></div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </div>
  );
}
