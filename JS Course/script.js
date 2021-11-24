let player = {
    age: 29,
    name: 'Justin',
    isActive: true,
    outfit: {
        color: 'blue',
        size: 'XL',
        cost: 75,
        isNew: false
    }
};

console.log(player);

console.log(player.name);
console.log(player['name']);

player.isActive = false;
console.log(player);

player.health = 100;
console.log(player);

delete player.health;
console.log(player);

console.log(player.outfit.color);

player.outfit.size = 'L';
console.log(player);