import { StyledShowroomButton } from "./styled";

interface ShowroomButtonProps {
  children: string;
  selectedRoom: string;
  setSelectedRoom: React.Dispatch<React.SetStateAction<string>>;
  room: string;
  onButtonClick: (roomType: string) => void;
};

function ShowroomButton({selectedRoom, setSelectedRoom, room, onButtonClick, children}:ShowroomButtonProps) {
  const isActive = selectedRoom === room;
  return(
    <StyledShowroomButton $active={isActive} onClick={() => { setSelectedRoom(room); onButtonClick(room); }}>
      {children}
    </StyledShowroomButton>
  );
}

export default ShowroomButton;