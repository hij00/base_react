import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SBottomPlay = styled.div``;
const Profile = styled.div``;
const Avatar = styled.div``;
const NextBtn = styled.div``;

export const BottomPlay = () => {
  return (
    <SBottomPlay>
      <Profile>
        <Avatar></Avatar>
        {/* =유저프로필 */}
        <h3>hijeong_</h3>
      </Profile>
      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SBottomPlay>
  );
};
