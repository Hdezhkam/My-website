const adminNavLinks = [
    {
        id: 1,
        text: 'Create New Post',
        link: '/admin/create-post',
        icon: 'fa fa-plus feather'
    },
    {
        id: 2,
        text: 'Posts List',
        link: '/admin/allposts',
        icon: 'fa fa-list feather'
    },
    {
        id: 3,
        text: 'Create Courses',
        link: '/admin/create-course',
        icon: 'fa fa-plus feather'
    },
    {
        id: 4,
        text: 'Courses List',
        link: '/admin/allcourses',
        icon: 'fa fa-list feather'
    }
];

const getAdminNavLinks = () => {
    return [...adminNavLinks];
};

export default getAdminNavLinks;
