import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cities = [
  'Алматы', 'Астана', 'Шымкент', 'Акмолинская обл.',
  'Актюбинская обл.', 'Алматинская обл.', 'Атырауская обл.',
  'Восточно-Казахстанская обл.', 'Жамбылская обл.',
  'Западно-Казахстанская обл.', 'Карагандинская обл.',
  'Костанайская обл.', 'Кызылординская обл.', 'Мангистауская обл.'
];

const technologies = [
  'AI', 'Blockchain', 'Web', 'Mobile', 'GameDev',
  'Data Science', 'IoT', 'AR/VR', 'Security', 'Cloud'
];

const OnboardingPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    city: '',
    technologies: [],
    role: '',
    school: '',
  });

  const handleCitySelect = (city) => {
    setFormData({ ...formData, city });
    setStep(2);
  };

  const handleTechSelect = (tech) => {
    const newTechnologies = formData.technologies.includes(tech)
      ? formData.technologies.filter(t => t !== tech)
      : [...formData.technologies, tech];
    setFormData({ ...formData, technologies: newTechnologies });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  const handleSubmit = async () => {
    try {
      const telegram = window.Telegram.WebApp;
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, {
        ...formData,
        telegramId: telegram.initDataUnsafe.user.id,
      });
      setUser(response.data);
      navigate('/main');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Где вы находитесь?</h2>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="p-3 text-left rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Какие технологии вас интересуют?</h2>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechSelect(tech)}
                  className={`p-3 text-left rounded-lg transition-all ${
                    formData.technologies.includes(tech)
                      ? 'bg-primary text-white'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {formData.technologies.length > 0 && (
              <button
                onClick={() => setStep(3)}
                className="w-full p-3 bg-primary text-white rounded-lg mt-4"
              >
                Далее
              </button>
            )}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Кем вы являетесь?</h2>
            <div className="space-y-3">
              <button
                onClick={() => handleRoleSelect('student')}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  formData.role === 'student' ? 'bg-primary text-white' : 'bg-white'
                }`}
              >
                Студент/Школьник
              </button>
              <button
                onClick={() => handleRoleSelect('professional')}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  formData.role === 'professional' ? 'bg-primary text-white' : 'bg-white'
                }`}
              >
                Работающий специалист
              </button>
              {formData.role === 'student' && (
                <input
                  type="text"
                  placeholder="Где учитесь?"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  className="w-full p-4 rounded-lg border border-gray-200 mt-3"
                />
              )}
              {(formData.role === 'professional' || (formData.role === 'student' && formData.school)) && (
                <button
                  onClick={handleSubmit}
                  className="w-full p-3 bg-primary text-white rounded-lg mt-4"
                >
                  Завершить
                </button>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mb-6 bg-gray-200 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>
      {renderStep()}
    </div>
  );
};

export default OnboardingPage; 