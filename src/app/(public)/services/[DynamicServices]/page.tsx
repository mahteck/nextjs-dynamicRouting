// export default function Dynamic_Services({ params }) {
//     return (
//         <>
//             <h1>Dynamic Services : {params.DynamicServices}</h1>
//         </>
//     )
// }

import { Services } from '../../objects/data';

export default function Dynamic_Services({ params }: { params: { DynamicServices: string } }) {
    // Find the service based on the parameter
    const service = Services.find(s => s.name.toLowerCase() === params.DynamicServices.toLowerCase());

    return (
        <>
            <br />
            <h1>{service?.heading}</h1>
            {service ? (
                <p>Service Description: {service.Description}</p>
            ) : (
                <p>No service found.</p>
            )}
        </>
    );
}