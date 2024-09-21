import PerfilTemplate from '@/components/templates/perfil/perfil';
import { getUser } from '@/services/actions/user.actions';
import { IProfessionalSelectPros } from '@/types/page/professional';

const PerfilPage = async () => {
  const user = await getUser();

  if (!user) return;

  return <PerfilTemplate {...user as IProfessionalSelectPros} />;
};

export default PerfilPage;
