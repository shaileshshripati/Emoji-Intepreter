import React, { useState } from 'react';
import './style.css';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300&display=swap');
</style>;

var mainEmojiDictionary = {
  'đī¸': 'Bellhop Bell',
  'â': 'Hourglass Done',
  'âŗ': 'Hourglass not done',
  'đšī¸': 'Joystick',
  'đ': 'Confetti Ball',
  'đē': 'Amphora',
  'đĻŊ': 'Manual WheelChair',
  'đĻŧ': 'Motorized WheelChair',
  'đ°ī¸': 'Mantelpiece Clock',
  'đ§ŋ': 'Nazar Amulet',
  'đ': 'Love Letter',
  'đ': 'Person Taking bath',
  'đ': 'Barber Pole'
};

var emojiDictionary = {
  'đī¸': 'Bellhop Bell',
  'â': 'Hourglass Done',
  'âŗ': 'Hourglass not done',
  'đšī¸': 'Joystick',
  'đ': 'Confetti Ball',
  'đē': 'Amphora',
  'đĻŊ': 'Manual WheelChair',
  'đĻŧ': 'Motorized WheelChair',
  'đ°ī¸': 'Mantelpiece Clock',
  'đ§ŋ': 'Nazar Amulet'
};
var emojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState('');

  function getInputHandler(event) {
    var userInput = event.target.value;
    var meaning = mainEmojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in database";
    }
    setMeaning(meaning);
  }

  function clickEmojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div>
      <h1>Objects Emoji Intepreter</h1>
      <input placeholder={'Enter the emoji'} onChange={getInputHandler} />
      <div className="output">{meaning}</div>
      <h3>Emoji's we know</h3>
      {emojis.map(function(emoji) {
        return (
          <span
            onClick={() => clickEmojiHandler(emoji)}
            style={{ cursor: 'pointer' }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
