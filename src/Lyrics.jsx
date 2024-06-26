import { useState } from "react";
import "./lyrics.scss";

const Lyrics = ({ audioElement }) => {
  const [currPos, setCurrPos] = useState(0);

  function audioRange() {
    const currTimestamp = audioElement.current.currentTime;
    if (currTimestamp > 7) {
      setCurrPos(1);
    }
    if (currTimestamp >= 10) {
      setCurrPos(2);
    }
    if (currTimestamp >= 12) {
        setCurrPos(3);
    }
    if (currTimestamp >= 14) {
        setCurrPos(4);
    }
    if (currTimestamp >=17 ) {
        setCurrPos(5);
    }
    if (currTimestamp >= 19) {
        setCurrPos(6);
    }
    if (currTimestamp >= 22) {
        setCurrPos(7);
    }
    if (currTimestamp >=25 ) {
        setCurrPos(8);
    }
    if (currTimestamp >= 28) {
        setCurrPos(9);
    }
    if (currTimestamp >= 31) {
        setCurrPos(10);
    }
    if (currTimestamp >= 34) {
        setCurrPos(11);
    }
    if (currTimestamp >= 37) {
        setCurrPos(12);
    }
    if (currTimestamp >= 40) {
        setCurrPos(13);
    }
    if (currTimestamp >= 43) {
        setCurrPos(14);
    }
    if (currTimestamp >= 46) {
        setCurrPos(15);
    }
    if (currTimestamp >= 49) {
        setCurrPos(16);
    }
    if (currTimestamp >= 52) {
        setCurrPos(17);
    }
    if (currTimestamp >= 55) {
        setCurrPos(18);
    }
    if (currTimestamp >= 58) {
        setCurrPos(19);
    }
    if (currTimestamp >= 63) {
        setCurrPos(20);
    }
    if (currTimestamp >= 66) {
        setCurrPos(21);
    }
    if (currTimestamp >= 69) {
        setCurrPos(22);
    }
    if (currTimestamp >= 72) {
        setCurrPos(23);
    }
    if (currTimestamp >= 75) {
        setCurrPos(24);
    }
    if (currTimestamp >= 74) {
        setCurrPos(25);
    }
    if (currTimestamp >= 79) {
        setCurrPos(26);
    }
    if (currTimestamp >= 83){
        setCurrPos(27);
    }
    if (currTimestamp >= 86) {
        setCurrPos(28);
    }
    if (currTimestamp >= 89) {
        setCurrPos(29);
    }
    if (currTimestamp >= 92) {
        setCurrPos(30);
    }
    if (currTimestamp >=95 ) {
        setCurrPos(31);
    }
    if (currTimestamp >= 98) {
        setCurrPos(32);
    }

    if (currTimestamp >= 101) {
        setCurrPos(33);
    }
    if (currTimestamp >= 104 ) {
        setCurrPos(34);
    }
    if (currTimestamp >= 107) {
        setCurrPos(35);
    }
    if (currTimestamp >= 110) {
        setCurrPos(36);
    }
    if (currTimestamp >= 113) {
        setCurrPos(37);
    }

    if (currTimestamp >= 117) {
        setCurrPos(38);
    }
    if (currTimestamp >= 120) {
        setCurrPos(39);
    }
    if (currTimestamp >= 123) {
        setCurrPos(40);
    }
    if (currTimestamp >= 126) {
        setCurrPos(41);
    }
    if (currTimestamp >= 130) {
        setCurrPos(42);
    }
    
}


   


    /*
            1-7
            2-10
            3-12
        */
  

  setInterval(() => {
    audioRange();
  }, 1000);

  return (
    <div className="lyrics">
      <span className={`${currPos >= 1 ? "active" : ""}`}>
        I've been reading books of old
        <br />
      </span>
      <span className={`${currPos >= 2 ? "active" : ""}`}>
        The legends and the myths
        <br />
      </span>
      <span className={`${currPos >= 3 ? "active" : ""}`}>
        Achilles and his gold
        <br />
      </span>
      <span className={`${currPos >= 4 ? "active" : ""}`}>
        Hercules and his gifts
        <br />
      </span>
      <span className={`${currPos >= 5 ? "active" : ""}`}>
        Spider-Man's control
        <br />
      </span>
      <span className={`${currPos >= 6 ? "active" : ""}`}>
        And Batman with his fists
        <br />
      </span>
      <span className={`${currPos >= 7 ? "active" : ""}`}>
        And clearly, I don't see myself upon that list
        <br />
      </span>
      <span className={`${currPos >= 8 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 9 ? "active" : ""}`}>
        But she said, "Where'd you wanna go?
        <br />
      </span>
      <span className={`${currPos >= 10 ? "active" : ""}`}>
        How much you wanna risk?
        <br />
      </span>
      <span className={`${currPos >= 11 ? "active" : ""}`}>
        I'm not looking for somebody with some superhuman gifts
        <br />
      </span>
      <span className={`${currPos >= 12 ? "active" : ""}`}>
        Some superhero
        <br />
      </span>
      <span className={`${currPos >= 13 ? "active" : ""}`}>
        Some fairy tale bliss
        <br />
      </span>
      <span className={`${currPos >= 14 ? "active" : ""}`}>
        Just something I can turn to
        <br />
      </span>
      <span className={`${currPos >= 15 ? "active" : ""}`}>
        Somebody I can kiss"
        <br />
      </span>
      <span className={`${currPos >= 16 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 17 ? "active" : ""}`}>
        I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 18 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 19 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 20 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span>
        <br />
      </span>
      <span className={`${currPos >= 21 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 22 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 23 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 24 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 25 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 26 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 27 ? "active" : ""}`}>
        Mm-mmh, hmm-hmm
        <br />
      </span>
      <span className={`${currPos >= 28 ? "active" : ""}`}>
        Oh, I want something just like this, yeah
        <br />
      </span>
      <span className={`${currPos >= 29 ? "active" : ""}`}>
        Oh, yeah
        <br />
      </span>
      <span className={`${currPos >= 30 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 31 ? "active" : ""}`}>
        I've been reading books of old
        <br />
      </span>
      <span className={`${currPos >= 32 ? "active" : ""}`}>
        The legends and the myths
        <br />
      </span>
      <span className={`${currPos >= 33 ? "active" : ""}`}>
        The testaments they told
        <br />
      </span>
      <span className={`${currPos >= 34 ? "active" : ""}`}>
        The moon and its eclipse
        <br />
      </span>
      <span className={`${currPos >= 35 ? "active" : ""}`}>
        And Superman unrolls a suit before he lifts
        <br />
      </span>
      <span className={`${currPos >= 36 ? "active" : ""}`}>
        But I'm not the kind of person that it fits
        <br />
      </span>
      <span className={`${currPos >= 37 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 38 ? "active" : ""}`}>
        She said, "Where'd you wanna go?
        <br />
      </span>
      <span className={`${currPos >= 39 ? "active" : ""}`}>
        How much you wanna risk?
        <br />
      </span>
      <span className={`${currPos >= 40 ? "active" : ""}`}>
        I'm not looking for somebody with some superhuman gifts
        <br />
      </span>
      <span className={`${currPos >= 41 ? "active" : ""}`}>
        Some superhero
        <br />
      </span>
      <span className={`${currPos >= 42 ? "active" : ""}`}>
        Some fairy tale bliss
        <br />
      </span>
      <span className={`${currPos >= 43 ? "active" : ""}`}>
        Just something I can turn to
        <br />
      </span>
      <span className={`${currPos >= 44 ? "active" : ""}`}>
        Somebody I can kiss"
        <br />
      </span>
      <span className={`${currPos >= 45 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 46 ? "active" : ""}`}>
        I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 47 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 48 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 49 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 50 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 51 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 52 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 53 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 54 ? "active" : ""}`}>
        Doo-doo-doo, doo-doo-doo
        <br />
      </span>
      <span className={`${currPos >= 54 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 55 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 56 ? "active" : ""}`}>
        Mm-mmh, hmm-hmm
        <br />
      </span>
      <span className={`${currPos >= 57 ? "active" : ""}`}>
        Oh, I want something just like this, yeah
        <br />
      </span>
      <span className={`${currPos >= 58 ? "active" : ""}`}>
        Oh, yeah
        <br />
      </span>
      <span className={`${currPos >= 59 ? "active" : ""}`}>
        <br />
      </span>
      <span>
        Where'd you wanna go?
        <br />
      </span>
      <span className={`${currPos >= 60 ? "active" : ""}`}>
        How much you wanna risk?
        <br />
      </span>
      <span className={`${currPos >= 61 ? "active" : ""}`}>
        I'm not looking for somebody with some superhuman gifts
        <br />
      </span>
      <span className={`${currPos >= 62 ? "active" : ""}`}>
        Some superhero
        <br />
      </span>
      <span className={`${currPos >= 63 ? "active" : ""}`}>
        Some fairy tale bliss
        <br />
      </span>
      <span className={`${currPos >= 63 ? "active" : ""}`}>
        Just something I can turn to
        <br />
      </span>
      <span className={`${currPos >= 64 ? "active" : ""}`}>
        Somebody I can kiss
        <br />
      </span>
      <span className={`${currPos >= 65 ? "active" : ""}`}>
        <br />
      </span>
      <span className={`${currPos >= 66 ? "active" : ""}`}>
        I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 67 ? "active" : ""}`}>
        Oh, oh
        <br />
      </span>
      <span className={`${currPos >= 68 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 69 ? "active" : ""}`}>
        Mm-mmh, oh
        <br />
      </span>
      <span>
        <br />
      </span>
      <span className={`${currPos >= 70 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
      <span className={`${currPos >= 71 ? "active" : ""}`}>
        Oh, I want something just like this
        <br />
      </span>
    </div>
  );
};

export default Lyrics;
