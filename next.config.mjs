/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // Or 'http' if applicable
            hostname: 'images.pexels.com', // Replace with the hostname of your external image source
            // port: '', // Optional: Specify if a custom port is used (e.g., '8080')
            // pathname: '/path/to/images/**', // Optional: Restrict to specific paths
          },

        
        ],
      },
    
};

export default nextConfig;
