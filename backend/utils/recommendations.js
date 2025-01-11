// recommendations.js

// Sample data
const users = [
    { id: 1, name: 'Alice', interests: ['music', 'movies', 'sports'] },
    { id: 2, name: 'Bob', interests: ['books', 'music', 'travel'] },
    { id: 3, name: 'Charlie', interests: ['movies', 'travel', 'sports'] },
];

// Function to find common interests between two users
function findCommonInterests(user1, user2) {
    return user1.interests.filter(interest => user2.interests.includes(interest));
}

// Function to recommend friends based on common interests
function recommendFriends(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) {
        return [];
    }

    return users
        .filter(u => u.id !== userId)
        .map(u => ({
            user: u,
            commonInterests: findCommonInterests(user, u)
        }))
        .sort((a, b) => b.commonInterests.length - a.commonInterests.length);
}

// Example usage
const recommendations = recommendFriends(1);
console.log(recommendations);