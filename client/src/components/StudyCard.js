import styled from "styled-components";
import { HeartFillIcon, LocationIcon } from "@goorm-dev/gds-goormthon";
import { MdPeopleAlt } from "react-icons/md";

export default function StudyCard({ item }) {
  return (
    <StudyBox>
      <IconBox>
        <HeartFillIcon className="likeBtn" />
      </IconBox>
      <UserName>{item.who_open}</UserName>
      <StudyTitle className="font-bold">{item.study_title}</StudyTitle>
      <div className="partyInfo">
        <div className="partyLocation">
          <LocationIcon />
          <p>{item.location /* tmX, tmY값이 넘어옴 location없어짐 */}</p>
        </div>
        <div className="partyMembers">
          <MdPeopleAlt />
          <p>{`${item.members} / ${item.min_member_cnt}`}</p>
        </div>
      </div>
    </StudyBox>
  );
}

const StudyBox = styled.div`
  height: 75px;
  margin: 20px;
  padding: 0 35px;
  background: #f4ede7;
  border-radius: 15px;
  .likeBtn {
    color: lightGray;
  }
  .font {
    margin-top: 20px;
  }
  .partyInfo {
    margin-left: -2px;
    text-align: left;
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
  }

  .partyLocation {
    display: flex;
    align-items: center;
  }

  .partyMembers {
    display: flex;
  }
`;

const IconBox = styled.div`
  float: right;
  width: 24px;
  height: 24px;
  margin: 10px -10px 0 0;
`;

const UserName = styled.p`
  color: #000000;
  margin: 10px 0 5px 0;
  text-align: left;
  font-size: 4px;
  font-weight: 200;
  padding-top: 10px;
`;

const StudyTitle = styled.p`
  text-align: left;
  color: #000000;
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
`;
