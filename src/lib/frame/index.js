import { Card, Container } from "../ui";
import React from "react";
import { mutate } from "@react-mutate/core";
import { Editor, modifiers } from "../editor";
import PropTypes from "prop-types";
import SplitPane from "react-split-pane";
import StyledSplitPaneContainer from "../ui/SplitPanes"
import {FixedWidthDiv} from "../ui/util/Layouts"

const EditorThatCanType = modifiers.canType(Editor);

const Frame = () => (
  <StyledSplitPaneContainer>
    <SplitPane split="vertical" minSize={200} maxSize={400} defaultSize={250}>

      <FixedWidthDiv>
      </FixedWidthDiv>

      <FixedWidthDiv>
        <Container>
          <Card>
            <EditorThatCanType onUpdate={() => {}} placeholder={"Change me!"} />
          </Card>
        </Container>
      </FixedWidthDiv>

    </SplitPane>
  </StyledSplitPaneContainer>
);

Frame.propTypes = {
  children: PropTypes.any
};

export default mutate(Frame, "Frame");
