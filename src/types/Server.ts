export type Server = {
    id: string;
    name: string;
    icon: string | null;
    // React.FC ou null
    owner: boolean;
}