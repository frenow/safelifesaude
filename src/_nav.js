export default {
  items: [
    {
      name: 'Página Inicial',
      url: '/dashboard',
      icon: 'icon-home',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Cadastro',
      url: '/cadastro',
      icon: 'icon-user',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Dados Médicos',
      url: '/dados',
      icon: 'icon-star',
    },	
    {
      name: 'Contatos de Emergência',
      url: '/contato',
      icon: 'icon-star',
    },
   {
      name: 'Histórico',
      url: '/historico',
      icon: 'icon-star',
      children: [
        {
          name: 'Peso',
          url: '/peso',
          icon: 'icon-star',
        },
        {
          name: 'Pressão arterial',
          url: '/pressao',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Agenda',
      url: '/agenda',
      icon: 'icon-calendar',
    },	
    {
      name: 'Exames',
      url: '/exames',
      icon: 'icon-star',
    },		
    {
      name: 'Prontuário',
      url: '/prontuario',
      icon: 'icon-folder',
    },		
    {
      name: 'Mapa de clínicas',
      url: '/mapa',
      icon: 'icon-map',
    },		
  ],
};
