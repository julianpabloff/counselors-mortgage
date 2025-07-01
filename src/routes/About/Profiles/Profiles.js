import Profile from '../Profile/Profile.js';

import jim from '../../../assets/jim-walker.jpg';
import andrea from '../../../assets/andrea-walker.jpg';
import lance from '../../../assets/lance-walker.jpg';

import './Profiles.css';

function Profiles() {
    return (
        <section className="profiles">
            <Profile
                name="Jim Walker, J.D., Founder"
                image={jim}
                alt="Jim Walker"
                nmls="198338"
                zillow="https://www.zillow.com/lender-profile/Jim%20D%20Walker"
            >
                <p>
                    <span>Jim, the founder of our company, built a legacy of happy clients and a well-run, successful business. He is deeply missed. You can learn more about Jim </span>
                    <a className="inline-link" href="https://www.harrellfuneralhomes.com/obituaries/James-Darby-Walker?obId=32630532">here</a>.
                </p>
            </Profile>
            <Profile
                name="Andrea Walker, Owner"
                image={andrea}
                alt="Andrea Walker"
                nmls="248388"
                zillow="https://www.zillow.com/lender-profile/awalker780/"
                reversed
            >
                <p>After a career in software integration and consulting within corporate America, I joined Counselors Mortgage to work alongside my husband Jim, the company’s founder, to help grow our family business. I manage business operations and oversee loan processing.</p>
                <br/>
                <p>My favorite kind of loan? One that closes quickly, runs smoothly, and offers an unbeatable rate. I am proud to say that the majority of our loans fit that description — and our clients agree.</p>
            </Profile>
            <Profile
                name="Lance Walker, Business Development"
                image={lance}
                alt="Lance Walker"
                nmls="2641750"
            >
                <p>I am excited to be joining the family business to build on the legacy left by my Dad, Jim Walker. I am stepping into his shoes leading Counselors Mortgage in business development effort, putting my Texas A&M Business Honors education into practice.</p>
            </Profile>
        </section>
    );
}

export default Profiles;
