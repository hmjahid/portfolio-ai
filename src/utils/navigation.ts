export const navigateToSection = (sectionId: string) => {
  const isHomePage = window.location.pathname === '/';
  
  if (!isHomePage) {
    // If not on homepage, navigate to homepage first
    window.location.href = '/';
    // Store the target section in sessionStorage
    sessionStorage.setItem('targetSection', sectionId);
    return;
  }

  // If already on homepage, scroll to section
  const element = document.getElementById(sectionId);
  if (element) {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start'
    };
    element.scrollIntoView(scrollOptions);
    // Prevent URL hash update
    history.pushState(null, '', window.location.pathname);
  }
};

// Special function for blog navigation - scroll to blog section on home page
export const navigateToBlog = () => {
  const isHomePage = window.location.pathname === '/';
  
  if (!isHomePage) {
    // If not on homepage, navigate to homepage first and scroll to blog section
    window.location.href = '/';
    sessionStorage.setItem('targetSection', 'blog');
    return;
  }

  // If already on homepage, scroll to blog section
  const blogElement = document.getElementById('blog');
  if (blogElement) {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start'
    };
    blogElement.scrollIntoView(scrollOptions);
    // Prevent URL hash update
    history.pushState(null, '', window.location.pathname);
  }
};

// Function to check and handle stored target section
export const handleStoredTargetSection = () => {
  const targetSection = sessionStorage.getItem('targetSection');
  if (targetSection) {
    // Clear the stored section
    sessionStorage.removeItem('targetSection');
    // Small delay to ensure page is loaded
    setTimeout(() => {
      const element = document.getElementById(targetSection);
      if (element) {
        const scrollOptions: ScrollIntoViewOptions = {
          behavior: 'smooth',
          block: 'start'
        };
        element.scrollIntoView(scrollOptions);
      }
    }, 100);
  }
};

// Function to navigate to a page and scroll to top
export const navigateWithScrollToTop = (navigate: any, path: string) => {
  navigate(path);
  // Store a flag to scroll to top when the new page loads
  sessionStorage.setItem('scrollToTop', 'true');
}; 