import './App.css';
import Header from './components/header/Header.jsx';
import '@fontsource-variable/inter';
// import Game from './components/gameNew/Game.jsx';
import UiTextField from './components/uikit/fields/UiTextField.jsx';
import UiSelectField from './components/uikit/fields/UiSelectField.jsx';
import { useState } from 'react';

export default function App() {
  const [language, setLanguage] = useState(null);
  const [error, setError] = useState('');

  return (
    <HomePageLayout header={<Header />}>
      {/*<Game />*/}
      <UiTextField
        label="Label"
        placeholder="Placeholder"
        required
        helperText="HelperText"
        isError="Is Error"
        inputType="text"
      />
      <UiSelectField
        label="Язык"
        required
        value={language}
        onChange={setLanguage}
        options={[
          { value: 'ru', label: 'Русский' },
          { value: 'en', label: 'English' },
        ]}
        placeholder="Выберите язык"
        helperText="Можно изменить позже"
        isError={error}
      />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen font-sans leading-normal">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
