import propTypes from 'prop-types';

export const RenderSection = ({title,children}) => {
return (
    <section>
    {title}
    {children}
    </section>
)
}

RenderSection.propTypes = {
    title:propTypes.string
}