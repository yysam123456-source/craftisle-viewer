SELECT id, name, email
FROM users
WHERE status = 'active'
ORDER BY created_at DESC;
