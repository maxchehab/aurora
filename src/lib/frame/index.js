import { Card, Container } from "../ui";
import React from "react";
import { mutate } from "@react-mutate/core";
import { Editor, modifiers } from "../editor";
import PropTypes from "prop-types";
import SplitPane from "react-split-pane";
import StyledSplitPaneContainer from "../ui/StyledSplitPaneContainer"

const EditorThatCanType = modifiers.canType(Editor);

const Frame = () => (
  <StyledSplitPaneContainer>
    <SplitPane split="vertical" minSize={50} defaultSize={100}>
      <div>
      </div>
      <div>
        <Container>
          <Card>
            <EditorThatCanType onUpdate={() => {}} placeholder={"Change me!"} />
          </Card>
        </Container>
      </div>
    </SplitPane>
  </StyledSplitPaneContainer>
);

Frame.propTypes = {
  children: PropTypes.any
};

export default mutate(Frame, "Frame");
