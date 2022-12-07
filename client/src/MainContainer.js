import React, { useState } from "react";
import CommentList from "./CommentList";
import ShowComment from "./ShowComent";
import { Route, Routes } from "react-router-dom";
import Video from './Video';
import SkillSetList from './SkillSetList'


export default function MainContainer({ skillSet, handleUpdateItem, handleFindVideoData, videoData, user }) {

    const [clicked, setClicked] = useState(false);


    return (
        <div>
           <Routes>
              <Route exact path="/video" element={
                  <Video
                    clicked={clicked}
                    setClicked={setClicked}
                    videoData={videoData}
                    skillSet={skillSet}
                    />}
                  />
              <Route exact path="/comments" element={
                  <CommentList user={user} />}
                  />
              <Route exact path="/comments/:id" element={
                   <ShowComment />
                 }
                 />
              <Route exact path="*" element={
                <SkillSetList
                  skillSet={skillSet}
                  clicked={clicked}
                  setClicked={setClicked}
                  handleUpdateItem={handleUpdateItem}
                  handleFindVideoData={handleFindVideoData}
                  />}
                />
            </Routes>
        </div>
      )
}
