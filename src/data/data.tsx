const buttonStyle = {
  border: '3px solid #CBFF4D',
  backgroundColor: 'transparent',
  color: '#CBFF4D',
  padding: '7px 20px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontSize: '1.2rem'
};

export { buttonStyle };


type LanguageType = {
  label: string;
  code: string;
};

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];
