import './ProfileLink.css';

function ProfileLink({ name, image, link }) {
    return (
        <a href={link} className="profile-link" target="_blank">
            <div>
                <img src={image} alt={name}/>
                {name}
            </div>
        </a>
    );
}

export default ProfileLink;
