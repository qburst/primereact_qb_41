const FieldsetProps = [
    {
        name: 'id',
        type: 'string',
        default: 'null',
        description: 'Unique identifier of the element.'
    },
    {
        name: 'legend',
        type: 'string',
        default: 'null',
        description: 'Header text of the fieldset.'
    },
    {
        name: 'className',
        type: 'string',
        default: 'null',
        description: 'Style class of the element.'
    },
    {
        name: 'style',
        type: 'object',
        default: 'null',
        description: 'Inline style of the element.'
    },
    {
        name: 'toggleable',
        type: 'boolean',
        default: 'false',
        description: 'When specified, content can toggled by clicking the legend.'
    },
    {
        name: 'collapsed',
        type: 'boolean',
        default: 'false',
        description: 'Defines the default visibility state of the content.'
    },
    {
        name: 'transitionOptions',
        type: 'object',
        default: 'null',
        description: 'The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.'
    }
];

const FieldsetEvents = [

];

const FieldsetStyles = [
    { name: 'p-fieldset', description: 'Fieldset element.' },
    {
        name: 'p-fieldset-toggleable',
        description: 'Toggleable fieldset element.'
    },
    { name: 'p-fieldset-legend', description: 'Legend element.' },
    { name: 'p-fieldset-content', description: 'Content element.' }
];

module.exports = {
    fieldset: {
        name: 'Fieldset',
        description: 'TODO',
        docUrl: 'https://primefaces.org/primereact/showcase/#/fieldset',
        props: FieldsetProps,
        events: FieldsetEvents,
        styles: FieldsetStyles
    }
};
