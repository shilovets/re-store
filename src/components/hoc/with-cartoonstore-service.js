import React from 'react';
import {CartoonstoreServiceConsumer} from "../cartoonstore-service-contex/cartoonstore-service-contex";

const withCartoonstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <CartoonstoreServiceConsumer>
                {
                    (cartoonstoreService) => {
                        return (<Wrapped {...props}
                                         cartoonstoreService={cartoonstoreService}/>);
                    }
                }
            </CartoonstoreServiceConsumer>
        );
    }
};
export {withCartoonstoreService};