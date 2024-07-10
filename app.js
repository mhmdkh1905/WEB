const app = document.getElementById('app')
const ddMenu = document.querySelector('#ddMenu')
const sandwitch = document.querySelectorAll('svg')
const html = document.documentElement

const toggle1 = () => html.classList.toggle('dark')

const setView = (v) => {
    toggleMenu(true)
    if (v === 'Home') {
        renderHome()
    } else if (v === 'About') {
        renderAbout()
    } else if (v === 'Contact') {
        renderContact()
    } else if (v === 'Dashboard') {
        renderDashboard()
    } 
}


const toggleMenu = (hide) => {
    if (!hide) {
        ddMenu.classList.toggle('hidden')
        document.querySelectorAll('svg').forEach((el) => {
            el.classList.toggle('hidden')
        })
    } else {
        ddMenu.classList.add('hidden')
        document.querySelectorAll('svg')[0].classList.remove('hidden')
        document.querySelectorAll('svg')[1].classList.add('hidden')
    }
}

const renderHome = () => {
    app.innerHTML = `
        <div class="flex flex-col lg:flex-row items-center justify-between mt-4 sm:mt-8 md:mt-12">
            <div class="text-black dark:text-white lg:max-w-xl">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight sm:leading-normal">
                    Videos Data
                </h1>
                <h3 class="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 sm:mt-3 md:mt-5">
                    Find your watched video's data, Now and Here!
                </h3>
                <p class="text-sm sm:text-base mt-2 sm:mt-3 md:mt-5">
                    Video Data offers a wide variety of videos accompanied with their new up-to-date data. Read, upload, and download your videos' data via our site.
                </p>
                <div class="mt-4 sm:mt-6 md:mt-10" >
                    <a href="#" class="bg-red-600 rounded-3xl py-2 px-4 sm:py-3 sm:px-8 text-sm sm:text-base font-medium inline-block mr-4 hover:bg-transparent hover:border-red-600 hover:text-black duration-300 hover:border border border-transparent dark:hover:bg-white" onclick="setView('Dashboard')">
                        Let's start
                    </a>
                </div>
            </div>
            <img src="images/homePhoto.png" class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-4 lg:mt-0" />
        </div>
    `
}



const renderAbout = () => {
    app.innerHTML = `
    <div class="container mx-auto px-4 py-8 max-w-3xl">
        <h1 class="text-4xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-500">Website Policy</h1>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-700 mb-4">All Rights Reserved</h2>
            <p class="mb-4">This website and all of its content, including but not limited to text, images, graphics, data, and software, are the exclusive property of Kareem Zeedan, Rami Taha, and Mohammed Khateeb. All rights reserved. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the owners, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.</p>
            <p class="mb-4">Unauthorized use or duplication of any material on this website without express and written permission from the owners is strictly prohibited. For permission requests, please contact us at [insert contact information].</p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-700 mb-4">Commitment to Quality</h2>
            <p class="mb-4">We are committed to providing the highest quality video data to our users. Our team meticulously curates and verifies content to ensure that it meets the highest standards of accuracy and reliability. This includes:</p>
            <ul class="list-disc pl-5 mb-4">
                <li class="mb-2"><strong class="font-semibold">Accurate Data:</strong> All video data provided on our website is sourced from reputable and verified sources. We ensure the accuracy and reliability of the data by conducting thorough checks and validations.</li>
                <li class="mb-2"><strong class="font-semibold">Comprehensive Information:</strong> We provide detailed and comprehensive information about each video, including metadata, descriptions, ratings, and statistics, to offer users a complete understanding of the content.</li>
                <li class="mb-2"><strong class="font-semibold">User-Friendly Presentation:</strong> Our video data is presented in a clear and user-friendly manner. We use intuitive designs and interfaces to make it easy for users to access and interpret the information.</li>
                <li class="mb-2"><strong class="font-semibold">Continuous Updates:</strong> We are committed to keeping our data current and relevant. We regularly update our database to reflect the latest information and trends in video content.</li>
                <li class="mb-2"><strong class="font-semibold">Feedback and Improvement:</strong> We actively seek feedback from our users to improve the quality and presentation of our video data. We use this feedback to enhance our content and ensure it meets the needs and expectations of our audience.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-700 mb-4">User Responsibility</h2>
            <p class="mb-4">By accessing this website, users agree to respect the intellectual property rights of Kareem Zeedan, Rami Taha, and Mohammed Khateeb. Users also agree not to engage in any unauthorized activities, including but not limited to copying, distributing, or altering any content without prior permission.</p>
            <p class="mb-4">Users are encouraged to report any violations of these terms to our support team. We take all reports seriously and will take appropriate action to protect our intellectual property and maintain the integrity of our content.</p>
        </section>
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-700 mb-4">Updates to Policy</h2>
            <p class="mb-4">This policy may be updated from time to time to reflect changes in our practices or legal requirements. We encourage users to review this policy periodically to stay informed about our terms and conditions.</p>
        </section>

        <p class="text-right italic mt-8">Effective Date: [insert date]</p>
    </div>
    `

}

const renderContact = () => {
    app.innerHTML = `
    <div class="container mx-auto px-4 py-8 max-w-3xl">
        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-700 mb-4">Contact Information</h2>
            <div class="bg-white p-4 rounded-lg shadow">
                <p class="mb-4">For inquiries regarding permissions, content quality, or any other matter related to this website, please contact us at:</p>
                <ul class="list-disc pl-5">
                    <li><strong class="font-semibold">Email:</strong> [insert email address]</li>
                    <li><strong class="font-semibold">Phone:</strong> [insert phone number]</li>
                    <li><strong class="font-semibold">Address:</strong> [insert physical address]</li>
                </ul>
            </div>
            <p class="mt-4">We value our users and are committed to providing an exceptional experience on our website. Thank you for your understanding and cooperation.</p>
        </section>
    </div>
    `
}

const renderDashboard = () => {
     app.innerHTML =  `
        <div class="container min-h-screen text-black dark:text-white px-2 sm:px-4 md:px-8 lg:px-28 py-2 sm:py-5 relative bg-white dark:bg-black">
            <div class="mb-4">
                <input type="text" id="searchBar" placeholder="Enter the video's name" value="${state.searchTerm}"
                    class="w-full p-2 border rounded dark:bg-gray-800 dark:text-white">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                    <h2 class="text-xl font-bold mb-2">Most Viewed Videos</h2>
                    <table id="viewsTable" class="w-full">
                        <thead>
                            <tr>
                                <th class="text-left">Video</th>
                                <th class="text-right">Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.viewsData.map(item => `
                                <tr>
                                    <td>${item.video}</td>
                                    <td class="text-right">${item.views.toLocaleString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                   <h2 class="text-xl font-bold mb-2">Liked Videos</h2>
                   <canvas id="likedVideosChart"></canvas>
               </div>
            </div>

            <div class="flex justify-between mb-4">
                <div id="dropZone" class="border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 rounded cursor-pointer">
                    <p>Drag & Drop file here or click to upload</p>
                    <input type="file" id="fileInput" class="hidden">
                </div>
                <button id="downloadBtn" class="bg-blue-500 text-white px-4 py-2 rounded">Download File</button>
            </div>
        </div>
    `
}


renderHome()

const state = {
    currentView: 'home',
    darkMode: false,
    viewsData: [
        { video: "Funny Cats Compilation", views: 1000000 },
        { video: "How to Code in JavaScript", views: 500000 },
        { video: "Top 10 Travel Destinations", views: 750000 },
        { video: "Easy Recipes for Beginners", views: 300000 },
        { video: "Latest Tech Gadgets Review", views: 600000 }
    ],
    likesData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Likes',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    searchTerm: ''
};

function createLikedVideosChart() {
    const ctx = document.getElementById('likedVideosChart').getContext('2d');
    new Chart(ctx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Liked Videos',
                data: [
                    { x: 0, y: 0, r: 20, name: "Funny Cats Compilation" },
                    { x: 1, y: 1, r: 15, name: "How to Code in JavaScript" },
                    { x: 2, y: 2, r: 25, name: "Top 10 Travel Destinations" },
                    { x: 3, y: 3, r: 18, name: "Easy Recipes for Beginners" },
                    { x: 4, y: 4, r: 22, name: "Latest Tech Gadgets Review" }
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Liked Videos'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw.name + ': ' + context.raw.r + ' likes';
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            }
        }
    });
}

function setupDashboardListeners() {
    document.getElementById('searchBar').addEventListener('input', handleSearch);
    document.getElementById('downloadBtn').addEventListener('click', handleDownload);
    setupFileUpload();
    createLikedVideosChart(); // Add this line
}
function handleSearch(e) {
    state.searchTerm = e.target.value;
    console.log('Searching for:', state.searchTerm);
    // Implement actual search logic here
}

function handleDownload() {
    console.log('Download initiated');
    // Implement actual download logic here
}

function setupFileUpload() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');

    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('bg-gray-200');
    });
    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('bg-gray-200');
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('bg-gray-200');
        if (e.dataTransfer.files.length) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    });
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFileUpload(e.target.files[0]);
        }
    });
}

function handleFileUpload(file) {
    console.log('File uploaded:', file.name);
    // Implement actual file upload logic here
}

