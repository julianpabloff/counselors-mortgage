import './ProfileLink.css';

function ProfileLink({ name, image, link }) {
    return (
        <a href={link} className="profile-link">
            <img src={image} alt={name}/>
            {name}
        </a>
    );
}

export default ProfileLink;
