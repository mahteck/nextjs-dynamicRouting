export interface Service {
    id: number;
    name: string;
    heading: string;
    Description: string;
}

export const Services: Service[] = [
    { id: 1, name: 'erp', heading: "ERP SERVICES", Description: 'We offer the best ERP Services to our client' },
    { id: 2, name: 'bi', heading: "BI SERVICES", Description: 'We create your business reports using Power BI Tool and Custom BI Tool' },
]