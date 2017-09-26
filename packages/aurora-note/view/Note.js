import React from "react";
import { Card } from "../../aurora-ui";
import { Editor, modifiers } from "../../aurora-editor";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import styled from "styled-components";
import { EditorState } from "draft-js";

const PartialWidthDiv = styled.div`
  float: left;
  width: 70%;
  margin-bottom: 0;
`;

const TypingEditor = props => {
  const _Editor = modifiers.canType(Editor);

  return <_Editor {...props} />;
};

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpdate = editorState => {
    this.props.onUpdate(this.props.id, editorState);
  };

  render() {
    return (
      <Card expanded>
        <PartialWidthDiv>
          <TypingEditor
            defaultEditorState={this.props.defaultEditorState}
            onUpdate={this.onUpdate}
            onBlur={this.props.onBlur}
          />
        </PartialWidthDiv>
        <DeleteButton {...this.props} />
      </Card>
    );
  }
}

Note.propTypes = {
  defaultEditorState: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default Note;
