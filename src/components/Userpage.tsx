import { useNavigate } from 'react-router-dom';
import { Container } from '../data/types';

const UserPage: React.FC = () => {
  const navigate = useNavigate();

  const containers: Container[] = [
    {
      id: 'update-data',
      title: 'Update Data',
      description: 'Change password and more',
    },
    {
      id: 'last-orders',
      title: 'Last Orders',
      description: 'View your recent orders',
    },
    {
      id: 'theme-color',
      title: 'Change Theme Color',
      description: 'Light | Dark',
    },
    {
      id: 'points',
      title: 'Points',
      description: 'Your actual Points',
    },
  ];

  const handleContainerClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className={`cursor-pointer flex flex-wrap gap-8 justify-between items-center px-8`}>
      {containers.map(container => (
        <div
          key={container.id}
          className={`flex flex-col w-64 h-80 items-center justify-center border rounded-xl gap-3`}
          onClick={() => handleContainerClick(container.id)}
        >
          <h2 className="text-4xl text-center px-4">{container.title}</h2>
          <p className="text-2xl text-center px-4">{container.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
