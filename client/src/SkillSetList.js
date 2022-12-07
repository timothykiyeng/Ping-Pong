import React, { useState } from 'react';


export default function SkillSetList({ skillSet, clicked, setClicked, handleUpdateItem, handleFindVideoData, handleFindId }) {

  const [dataIndex, setDataIndex] = useState(0)

  const yogaItems = [...skillSet]
    .slice(dataIndex, dataIndex + 3)

    .map((skill) =>
    <SkillItem
      key={skill.id}
      skill={skill}
      handleUpdateItem={handleUpdateItem}
      clicked={clicked}
      setClicked={setClicked}
      handleFindVideoData={handleFindVideoData}
      handleFindId={handleFindId}
    />
  )

  function handleClickMore() {
    setDataIndex((dataIndex) => (dataIndex + 3) % skillSet.length);
  }
  function handleClickLess() {
    setDataIndex((dataIndex) => (dataIndex - 3) % skillSet.length);
  }

  return (
    <>
    <div className="comment-page-title">
      <p>Learn. Spin. Serve.</p>
    </div>
    <div className="comment-page-intro">
      <p>No matter where you currently are on your table tennis journey, you’re just a few clicks away from figuring out how to take your game to the next level.<br/>Explore different table tennis techniques with instructional videos to help guide you on your journey.</p>
    </div>
    <div className="skill-list">
      <div className="skill-container">{yogaItems}</div>
      <div className="float-container">
          <div className="next-container">
                <button
                className="back-button"
                onClick={handleClickLess}><i class="gg-chevron-left"></i></button>
          </div>
          <div className="next-container">
              <button
                className="next-button"
                onClick={handleClickMore}><i class="gg-chevron-right"></i></button>
            </div>
        </div>
    </div>
   </>
  )
}
