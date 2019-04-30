const navLinks = [
    { id: 1, text: 'Home', link: '/', icon: 'fa fa-home feather' },
    {
        id: 2,
        text: 'Courses',
        link: '/courses',
        count: '',
        icon: 'fa fa-graduation-cap feather'
    },
    { id: 3, text: 'Education', link: '/education',count: '', icon: 'fa fa-university feather' },
    { id: 4, text: 'Skills', link: '/skills',count: '', icon: 'fa fa-briefcase feather' },
    { id: 5, text: 'About Me', link: '/about', icon: 'fa fa-user feather' },
    { id: 6, text: 'Contact', link: '/contact', icon: 'fa fa-envelope feather' }
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
