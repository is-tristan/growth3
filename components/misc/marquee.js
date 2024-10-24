const Marquee = ({ className = "", crossColor = "" }) => {

    return (

        <div className={`marquee ${className}`}>

            <div className="marqueeWrapper">

                <h3>disrupting_industries</h3>

                <h3 className={`cross ${crossColor}`}>X</h3>

                <h3>designing_the_future</h3>

                <h3 className={`cross ${crossColor}`}>X</h3>

                <h3>disrupting_industries</h3>

                <h3 className={`cross ${crossColor}`}>X</h3>

                <h3>designing_the_future</h3>

                <h3 className={`cross ${crossColor}`}>X</h3>

                <h3>disrupting_industries</h3>

                <h3 className={`cross ${crossColor}`}>X</h3>

                <h3>designing_the_future</h3>

            </div>

        </div>

    );

}

export default Marquee