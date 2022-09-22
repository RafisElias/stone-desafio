import Home from './routes/Home.html';
import About from './routes/About.html';
import ConsultedCharacters from './routes/ConsultedCharacters.html';
import CharacterInfo from './routes/CharacterInfo.html';

export default {
  '/': Home,
  '/about': About,
  '/consulted-characters': ConsultedCharacters,
  '/characters-info/:id': {
    component: CharacterInfo,
    data: { name: 'Text name' },
  },
};
