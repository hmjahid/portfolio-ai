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