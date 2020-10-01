import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../custom-button/CustomButton.scss';
import './Homepage.scss';

const HomePage = () => {

    useEffect(() => {
        document.title = 'Filip Boshevski | Full-Stack Developer';
    }, []);

    return (
        <div className='homepage'>
            <div className='heading-primary'>
                <div className='heading-primary__tags'>
                    <span className='heading-primary__tag'>html</span>
                    <span className='heading-primary__tag' style={{marginTop: '-10px'}}>body</span>
                </div>
                <div className='heading-primary__body'>
                    <span className='heading-primary__tag'>h1</span>
                    <div className='custom-heading'>
                        <p className='typewriter__header' id='1'>
                            <span className='typewriter typewriter-1'>Hey.</span>
                            <span className='typewriter typewriter-2'>I'm <span className='custom-heading__red'>F</span>ilip,</span>
                            <span className='typewriter typewriter-3'>a Full-Stack Developer.</span><span className='heading-primary__tag heading-primary__tag-heading' style={{width: '3rem', display: 'inline-block'}}>/ h1</span>
                        </p>
                        <span className='custom-heading__desc'>Full-Stack Developer | UI/UX Designer | Freelancer</span>
                        <div className='custom-heading__buttons homepage__buttons'>
                            <Link className='custom-button custom-button-fill custom-heading__button' to='/mywork'>View Projects</Link>
                            <Link className='custom-button custom-heading__button' to='/aboutme'>About Me</Link>
                        </div>
                    </div>
                </div>
                <div className='heading-primary__closing-tags'>
                    <span className='heading-primary__tag heading-primary__tag-close'>/ body</span>
                    <span className='heading-primary__tag heading-primary__tag-close'>/ html</span>
                </div>
            </div>
            <div className='content'>
                <div className='content__img-big'>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTM0NC4xNTgiIGhlaWdodD0iMTE2OC40MDkiIHZpZXdCb3g9IjAgMCAxMzQ0LjE1OCAxMTY4LjQwOSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6dXJsKCNhKTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwLjEyOCIgeTE9IjAuMjQ1IiB4Mj0iMC42MjgiIHkyPSIxLjI0MSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2M5MDYwZCIvPjxzdG9wIG9mZnNldD0iMC4yOTUiIHN0b3AtY29sb3I9IiNmZjRhM2QiLz48c3RvcCBvZmZzZXQ9IjAuNjAzIiBzdG9wLWNvbG9yPSIjZmEwNDA0Ii8+PHN0b3Agb2Zmc2V0PSIwLjYxNSIgc3RvcC1jb2xvcj0iI2Y2MDQwNSIvPjxzdG9wIG9mZnNldD0iMC42ODIiIHN0b3AtY29sb3I9IiNlMTA1MDgiLz48c3RvcCBvZmZzZXQ9IjAuNzU4IiBzdG9wLWNvbG9yPSIjZDMwNjBiIi8+PHN0b3Agb2Zmc2V0PSIwLjg1IiBzdG9wLWNvbG9yPSIjY2IwNjBkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgwNjBkIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMi45MTQsMTE3NC42OTJhMTcuNTgyLDE3LjU4MiwwLDAsMS03LjcyNS0xLjkzMUExNS4yNzEsMTUuMjcxLDAsMCwxLDkuNCwxMTUxLjkwNkw1NzMuNjc0LDE3NC40NDlsNDU0LjIsNzg3LjA2M0gxMjAzLjYxTDY2NS45ODIsMzAuMDEzYTE1LjI3MSwxNS4yNzEsMCwwLDEsNS43OTMtMjAuODU0LDE0Ljk1MSwxNC45NTEsMCwwLDEsMjAuODU2LDUuNzkzbDU2NC4yNzgsOTc3LjQ1N0gzNDguMTE3bC04Ny42NzMsMTUyLjE2MUgxMzM2LjA4NmExNS40NDgsMTUuNDQ4LDAsMSwxLDAsMzAuOUgyMDcuMTQ0TDMyNS43MTYsOTcwLjAwOWEuMzc4LjM3OCwwLDAsMSwuMzg2LS4zODZMNjYxLjczMywzODguNzg3bC04OC4wNi0xNTIuOTMzTDM2LjA0NiwxMTY2Ljk2OEExNS4wODMsMTUuMDgzLDAsMCwxLDIyLjkxNCwxMTc0LjY5MlpNMzY1Ljg4NCw5NjEuMTI2SDk5Mi43M0w2NzkuNSw0MTguNTI0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuMzc3IC03LjA1NikiLz48L3N2Zz4=" alt="Logo large" className="content__img" />
                </div>
                <div className='content__number-large'>01</div>
            </div>
        </div>
    )
}

export default HomePage;