import {PortableText} from "@portabletext/react";
import {PortableTextBlock} from "@portabletext/types";

type Props = {
    description: PortableTextBlock
}

const ServiceItemDescription = ({description}: Props) => {
    console.log('description', description)

    return (
        <div className={'pl-4'}>
            <PortableText
                value={description}
                components={{
                    block: {
                        h1: ({children}) => <h1 className={'text-4xl antialiased font-bold'}>{children}</h1>,
                        h2: ({children}) => <h2 className={'text-3xl antialiased font-semibold'}>{children}</h2>,
                        h3: ({children}) => <h3 className={'text-2xl antialiased font-medium'}>{children}</h3>,
                        h4: ({children}) => <h4 className={'text-xl antialiased font-medium'}>{children}</h4>,
                        h5: ({children}) => <h5 className={'text-lg antialiased font-medium'}>{children}</h5>,
                        h6: ({children}) => <h6 className={'text-sm antialiased font-medium'}>{children}</h6>,
                    }
                }}/>
        </div>
    );
};

export default ServiceItemDescription;
